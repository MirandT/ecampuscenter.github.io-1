// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19039 = [];
var len__10647__auto___19045 = arguments.length;
var i__10648__auto___19046 = (0);
while(true){
if((i__10648__auto___19046 < len__10647__auto___19045)){
args19039.push((arguments[i__10648__auto___19046]));

var G__19047 = (i__10648__auto___19046 + (1));
i__10648__auto___19046 = G__19047;
continue;
} else {
}
break;
}

var G__19041 = args19039.length;
switch (G__19041) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19039.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19042 = (function (f,blockable,meta19043){
this.f = f;
this.blockable = blockable;
this.meta19043 = meta19043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19044,meta19043__$1){
var self__ = this;
var _19044__$1 = this;
return (new cljs.core.async.t_cljs$core$async19042(self__.f,self__.blockable,meta19043__$1));
});

cljs.core.async.t_cljs$core$async19042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19044){
var self__ = this;
var _19044__$1 = this;
return self__.meta19043;
});

cljs.core.async.t_cljs$core$async19042.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19043","meta19043",1525810966,null)], null);
});

cljs.core.async.t_cljs$core$async19042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19042";

cljs.core.async.t_cljs$core$async19042.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async19042");
});

cljs.core.async.__GT_t_cljs$core$async19042 = (function cljs$core$async$__GT_t_cljs$core$async19042(f__$1,blockable__$1,meta19043){
return (new cljs.core.async.t_cljs$core$async19042(f__$1,blockable__$1,meta19043));
});

}

return (new cljs.core.async.t_cljs$core$async19042(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args19051 = [];
var len__10647__auto___19054 = arguments.length;
var i__10648__auto___19055 = (0);
while(true){
if((i__10648__auto___19055 < len__10647__auto___19054)){
args19051.push((arguments[i__10648__auto___19055]));

var G__19056 = (i__10648__auto___19055 + (1));
i__10648__auto___19055 = G__19056;
continue;
} else {
}
break;
}

var G__19053 = args19051.length;
switch (G__19053) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19051.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args19058 = [];
var len__10647__auto___19061 = arguments.length;
var i__10648__auto___19062 = (0);
while(true){
if((i__10648__auto___19062 < len__10647__auto___19061)){
args19058.push((arguments[i__10648__auto___19062]));

var G__19063 = (i__10648__auto___19062 + (1));
i__10648__auto___19062 = G__19063;
continue;
} else {
}
break;
}

var G__19060 = args19058.length;
switch (G__19060) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19058.length)].join('')));

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
var args19065 = [];
var len__10647__auto___19068 = arguments.length;
var i__10648__auto___19069 = (0);
while(true){
if((i__10648__auto___19069 < len__10647__auto___19068)){
args19065.push((arguments[i__10648__auto___19069]));

var G__19070 = (i__10648__auto___19069 + (1));
i__10648__auto___19069 = G__19070;
continue;
} else {
}
break;
}

var G__19067 = args19065.length;
switch (G__19067) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19065.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19072 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19072);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19072,ret){
return (function (){
return fn1.call(null,val_19072);
});})(val_19072,ret))
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
var args19073 = [];
var len__10647__auto___19076 = arguments.length;
var i__10648__auto___19077 = (0);
while(true){
if((i__10648__auto___19077 < len__10647__auto___19076)){
args19073.push((arguments[i__10648__auto___19077]));

var G__19078 = (i__10648__auto___19077 + (1));
i__10648__auto___19077 = G__19078;
continue;
} else {
}
break;
}

var G__19075 = args19073.length;
switch (G__19075) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19073.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6736__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__10447__auto___19080 = n;
var x_19081 = (0);
while(true){
if((x_19081 < n__10447__auto___19080)){
(a[x_19081] = (0));

var G__19082 = (x_19081 + (1));
x_19081 = G__19082;
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

var G__19083 = (i + (1));
i = G__19083;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19087 = (function (flag,meta19088){
this.flag = flag;
this.meta19088 = meta19088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19089,meta19088__$1){
var self__ = this;
var _19089__$1 = this;
return (new cljs.core.async.t_cljs$core$async19087(self__.flag,meta19088__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19089){
var self__ = this;
var _19089__$1 = this;
return self__.meta19088;
});})(flag))
;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19087.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19088","meta19088",1053825584,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19087";

cljs.core.async.t_cljs$core$async19087.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async19087");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19087 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19087(flag__$1,meta19088){
return (new cljs.core.async.t_cljs$core$async19087(flag__$1,meta19088));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19087(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19093 = (function (flag,cb,meta19094){
this.flag = flag;
this.cb = cb;
this.meta19094 = meta19094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19095,meta19094__$1){
var self__ = this;
var _19095__$1 = this;
return (new cljs.core.async.t_cljs$core$async19093(self__.flag,self__.cb,meta19094__$1));
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19095){
var self__ = this;
var _19095__$1 = this;
return self__.meta19094;
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19094","meta19094",1743645898,null)], null);
});

cljs.core.async.t_cljs$core$async19093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19093";

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async19093");
});

cljs.core.async.__GT_t_cljs$core$async19093 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19093(flag__$1,cb__$1,meta19094){
return (new cljs.core.async.t_cljs$core$async19093(flag__$1,cb__$1,meta19094));
});

}

return (new cljs.core.async.t_cljs$core$async19093(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19096_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19096_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19097_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19097_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9426__auto__ = wport;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19098 = (i + (1));
i = G__19098;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__9414__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9414__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9414__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
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
var args__10654__auto__ = [];
var len__10647__auto___19104 = arguments.length;
var i__10648__auto___19105 = (0);
while(true){
if((i__10648__auto___19105 < len__10647__auto___19104)){
args__10654__auto__.push((arguments[i__10648__auto___19105]));

var G__19106 = (i__10648__auto___19105 + (1));
i__10648__auto___19105 = G__19106;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19101){
var map__19102 = p__19101;
var map__19102__$1 = ((((!((map__19102 == null)))?((((map__19102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19102):map__19102);
var opts = map__19102__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19099){
var G__19100 = cljs.core.first.call(null,seq19099);
var seq19099__$1 = cljs.core.next.call(null,seq19099);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19100,seq19099__$1);
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
var args19107 = [];
var len__10647__auto___19157 = arguments.length;
var i__10648__auto___19158 = (0);
while(true){
if((i__10648__auto___19158 < len__10647__auto___19157)){
args19107.push((arguments[i__10648__auto___19158]));

var G__19159 = (i__10648__auto___19158 + (1));
i__10648__auto___19158 = G__19159;
continue;
} else {
}
break;
}

var G__19109 = args19107.length;
switch (G__19109) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19107.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18980__auto___19161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___19161){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___19161){
return (function (state_19133){
var state_val_19134 = (state_19133[(1)]);
if((state_val_19134 === (7))){
var inst_19129 = (state_19133[(2)]);
var state_19133__$1 = state_19133;
var statearr_19135_19162 = state_19133__$1;
(statearr_19135_19162[(2)] = inst_19129);

(statearr_19135_19162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (1))){
var state_19133__$1 = state_19133;
var statearr_19136_19163 = state_19133__$1;
(statearr_19136_19163[(2)] = null);

(statearr_19136_19163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (4))){
var inst_19112 = (state_19133[(7)]);
var inst_19112__$1 = (state_19133[(2)]);
var inst_19113 = (inst_19112__$1 == null);
var state_19133__$1 = (function (){var statearr_19137 = state_19133;
(statearr_19137[(7)] = inst_19112__$1);

return statearr_19137;
})();
if(cljs.core.truth_(inst_19113)){
var statearr_19138_19164 = state_19133__$1;
(statearr_19138_19164[(1)] = (5));

} else {
var statearr_19139_19165 = state_19133__$1;
(statearr_19139_19165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (13))){
var state_19133__$1 = state_19133;
var statearr_19140_19166 = state_19133__$1;
(statearr_19140_19166[(2)] = null);

(statearr_19140_19166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (6))){
var inst_19112 = (state_19133[(7)]);
var state_19133__$1 = state_19133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19133__$1,(11),to,inst_19112);
} else {
if((state_val_19134 === (3))){
var inst_19131 = (state_19133[(2)]);
var state_19133__$1 = state_19133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19133__$1,inst_19131);
} else {
if((state_val_19134 === (12))){
var state_19133__$1 = state_19133;
var statearr_19141_19167 = state_19133__$1;
(statearr_19141_19167[(2)] = null);

(statearr_19141_19167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (2))){
var state_19133__$1 = state_19133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19133__$1,(4),from);
} else {
if((state_val_19134 === (11))){
var inst_19122 = (state_19133[(2)]);
var state_19133__$1 = state_19133;
if(cljs.core.truth_(inst_19122)){
var statearr_19142_19168 = state_19133__$1;
(statearr_19142_19168[(1)] = (12));

} else {
var statearr_19143_19169 = state_19133__$1;
(statearr_19143_19169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (9))){
var state_19133__$1 = state_19133;
var statearr_19144_19170 = state_19133__$1;
(statearr_19144_19170[(2)] = null);

(statearr_19144_19170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (5))){
var state_19133__$1 = state_19133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19145_19171 = state_19133__$1;
(statearr_19145_19171[(1)] = (8));

} else {
var statearr_19146_19172 = state_19133__$1;
(statearr_19146_19172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (14))){
var inst_19127 = (state_19133[(2)]);
var state_19133__$1 = state_19133;
var statearr_19147_19173 = state_19133__$1;
(statearr_19147_19173[(2)] = inst_19127);

(statearr_19147_19173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (10))){
var inst_19119 = (state_19133[(2)]);
var state_19133__$1 = state_19133;
var statearr_19148_19174 = state_19133__$1;
(statearr_19148_19174[(2)] = inst_19119);

(statearr_19148_19174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (8))){
var inst_19116 = cljs.core.async.close_BANG_.call(null,to);
var state_19133__$1 = state_19133;
var statearr_19149_19175 = state_19133__$1;
(statearr_19149_19175[(2)] = inst_19116);

(statearr_19149_19175[(1)] = (10));


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
});})(c__18980__auto___19161))
;
return ((function (switch__18866__auto__,c__18980__auto___19161){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_19153 = [null,null,null,null,null,null,null,null];
(statearr_19153[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_19153[(1)] = (1));

return statearr_19153;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_19133){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19154){if((e19154 instanceof Object)){
var ex__18870__auto__ = e19154;
var statearr_19155_19176 = state_19133;
(statearr_19155_19176[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19177 = state_19133;
state_19133 = G__19177;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_19133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_19133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___19161))
})();
var state__18982__auto__ = (function (){var statearr_19156 = f__18981__auto__.call(null);
(statearr_19156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___19161);

return statearr_19156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___19161))
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
return (function (p__19365){
var vec__19366 = p__19365;
var v = cljs.core.nth.call(null,vec__19366,(0),null);
var p = cljs.core.nth.call(null,vec__19366,(1),null);
var job = vec__19366;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18980__auto___19552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___19552,res,vec__19366,v,p,job,jobs,results){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___19552,res,vec__19366,v,p,job,jobs,results){
return (function (state_19373){
var state_val_19374 = (state_19373[(1)]);
if((state_val_19374 === (1))){
var state_19373__$1 = state_19373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19373__$1,(2),res,v);
} else {
if((state_val_19374 === (2))){
var inst_19370 = (state_19373[(2)]);
var inst_19371 = cljs.core.async.close_BANG_.call(null,res);
var state_19373__$1 = (function (){var statearr_19375 = state_19373;
(statearr_19375[(7)] = inst_19370);

return statearr_19375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19373__$1,inst_19371);
} else {
return null;
}
}
});})(c__18980__auto___19552,res,vec__19366,v,p,job,jobs,results))
;
return ((function (switch__18866__auto__,c__18980__auto___19552,res,vec__19366,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19379 = [null,null,null,null,null,null,null,null];
(statearr_19379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19379[(1)] = (1));

return statearr_19379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19373){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19380){if((e19380 instanceof Object)){
var ex__18870__auto__ = e19380;
var statearr_19381_19553 = state_19373;
(statearr_19381_19553[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19554 = state_19373;
state_19373 = G__19554;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___19552,res,vec__19366,v,p,job,jobs,results))
})();
var state__18982__auto__ = (function (){var statearr_19382 = f__18981__auto__.call(null);
(statearr_19382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___19552);

return statearr_19382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___19552,res,vec__19366,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19383){
var vec__19384 = p__19383;
var v = cljs.core.nth.call(null,vec__19384,(0),null);
var p = cljs.core.nth.call(null,vec__19384,(1),null);
var job = vec__19384;
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
var n__10447__auto___19555 = n;
var __19556 = (0);
while(true){
if((__19556 < n__10447__auto___19555)){
var G__19387_19557 = type;
var G__19387_19558__$1 = (((G__19387_19557 instanceof cljs.core.Keyword))?G__19387_19557.fqn:null);
switch (G__19387_19558__$1) {
case "compute":
var c__18980__auto___19560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19556,c__18980__auto___19560,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (__19556,c__18980__auto___19560,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async){
return (function (state_19400){
var state_val_19401 = (state_19400[(1)]);
if((state_val_19401 === (1))){
var state_19400__$1 = state_19400;
var statearr_19402_19561 = state_19400__$1;
(statearr_19402_19561[(2)] = null);

(statearr_19402_19561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (2))){
var state_19400__$1 = state_19400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19400__$1,(4),jobs);
} else {
if((state_val_19401 === (3))){
var inst_19398 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19400__$1,inst_19398);
} else {
if((state_val_19401 === (4))){
var inst_19390 = (state_19400[(2)]);
var inst_19391 = process.call(null,inst_19390);
var state_19400__$1 = state_19400;
if(cljs.core.truth_(inst_19391)){
var statearr_19403_19562 = state_19400__$1;
(statearr_19403_19562[(1)] = (5));

} else {
var statearr_19404_19563 = state_19400__$1;
(statearr_19404_19563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (5))){
var state_19400__$1 = state_19400;
var statearr_19405_19564 = state_19400__$1;
(statearr_19405_19564[(2)] = null);

(statearr_19405_19564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (6))){
var state_19400__$1 = state_19400;
var statearr_19406_19565 = state_19400__$1;
(statearr_19406_19565[(2)] = null);

(statearr_19406_19565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (7))){
var inst_19396 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
var statearr_19407_19566 = state_19400__$1;
(statearr_19407_19566[(2)] = inst_19396);

(statearr_19407_19566[(1)] = (3));


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
});})(__19556,c__18980__auto___19560,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async))
;
return ((function (__19556,switch__18866__auto__,c__18980__auto___19560,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19411 = [null,null,null,null,null,null,null];
(statearr_19411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19411[(1)] = (1));

return statearr_19411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19400){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19412){if((e19412 instanceof Object)){
var ex__18870__auto__ = e19412;
var statearr_19413_19567 = state_19400;
(statearr_19413_19567[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19568 = state_19400;
state_19400 = G__19568;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(__19556,switch__18866__auto__,c__18980__auto___19560,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async))
})();
var state__18982__auto__ = (function (){var statearr_19414 = f__18981__auto__.call(null);
(statearr_19414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___19560);

return statearr_19414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(__19556,c__18980__auto___19560,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async))
);


break;
case "async":
var c__18980__auto___19569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19556,c__18980__auto___19569,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (__19556,c__18980__auto___19569,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async){
return (function (state_19427){
var state_val_19428 = (state_19427[(1)]);
if((state_val_19428 === (1))){
var state_19427__$1 = state_19427;
var statearr_19429_19570 = state_19427__$1;
(statearr_19429_19570[(2)] = null);

(statearr_19429_19570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (2))){
var state_19427__$1 = state_19427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19427__$1,(4),jobs);
} else {
if((state_val_19428 === (3))){
var inst_19425 = (state_19427[(2)]);
var state_19427__$1 = state_19427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19427__$1,inst_19425);
} else {
if((state_val_19428 === (4))){
var inst_19417 = (state_19427[(2)]);
var inst_19418 = async.call(null,inst_19417);
var state_19427__$1 = state_19427;
if(cljs.core.truth_(inst_19418)){
var statearr_19430_19571 = state_19427__$1;
(statearr_19430_19571[(1)] = (5));

} else {
var statearr_19431_19572 = state_19427__$1;
(statearr_19431_19572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (5))){
var state_19427__$1 = state_19427;
var statearr_19432_19573 = state_19427__$1;
(statearr_19432_19573[(2)] = null);

(statearr_19432_19573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (6))){
var state_19427__$1 = state_19427;
var statearr_19433_19574 = state_19427__$1;
(statearr_19433_19574[(2)] = null);

(statearr_19433_19574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (7))){
var inst_19423 = (state_19427[(2)]);
var state_19427__$1 = state_19427;
var statearr_19434_19575 = state_19427__$1;
(statearr_19434_19575[(2)] = inst_19423);

(statearr_19434_19575[(1)] = (3));


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
});})(__19556,c__18980__auto___19569,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async))
;
return ((function (__19556,switch__18866__auto__,c__18980__auto___19569,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19438 = [null,null,null,null,null,null,null];
(statearr_19438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19438[(1)] = (1));

return statearr_19438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19427){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19439){if((e19439 instanceof Object)){
var ex__18870__auto__ = e19439;
var statearr_19440_19576 = state_19427;
(statearr_19440_19576[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19577 = state_19427;
state_19427 = G__19577;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(__19556,switch__18866__auto__,c__18980__auto___19569,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async))
})();
var state__18982__auto__ = (function (){var statearr_19441 = f__18981__auto__.call(null);
(statearr_19441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___19569);

return statearr_19441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(__19556,c__18980__auto___19569,G__19387_19557,G__19387_19558__$1,n__10447__auto___19555,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__19578 = (__19556 + (1));
__19556 = G__19578;
continue;
} else {
}
break;
}

var c__18980__auto___19579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___19579,jobs,results,process,async){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___19579,jobs,results,process,async){
return (function (state_19463){
var state_val_19464 = (state_19463[(1)]);
if((state_val_19464 === (1))){
var state_19463__$1 = state_19463;
var statearr_19465_19580 = state_19463__$1;
(statearr_19465_19580[(2)] = null);

(statearr_19465_19580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19464 === (2))){
var state_19463__$1 = state_19463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19463__$1,(4),from);
} else {
if((state_val_19464 === (3))){
var inst_19461 = (state_19463[(2)]);
var state_19463__$1 = state_19463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19463__$1,inst_19461);
} else {
if((state_val_19464 === (4))){
var inst_19444 = (state_19463[(7)]);
var inst_19444__$1 = (state_19463[(2)]);
var inst_19445 = (inst_19444__$1 == null);
var state_19463__$1 = (function (){var statearr_19466 = state_19463;
(statearr_19466[(7)] = inst_19444__$1);

return statearr_19466;
})();
if(cljs.core.truth_(inst_19445)){
var statearr_19467_19581 = state_19463__$1;
(statearr_19467_19581[(1)] = (5));

} else {
var statearr_19468_19582 = state_19463__$1;
(statearr_19468_19582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19464 === (5))){
var inst_19447 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19463__$1 = state_19463;
var statearr_19469_19583 = state_19463__$1;
(statearr_19469_19583[(2)] = inst_19447);

(statearr_19469_19583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19464 === (6))){
var inst_19444 = (state_19463[(7)]);
var inst_19449 = (state_19463[(8)]);
var inst_19449__$1 = cljs.core.async.chan.call(null,(1));
var inst_19450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19451 = [inst_19444,inst_19449__$1];
var inst_19452 = (new cljs.core.PersistentVector(null,2,(5),inst_19450,inst_19451,null));
var state_19463__$1 = (function (){var statearr_19470 = state_19463;
(statearr_19470[(8)] = inst_19449__$1);

return statearr_19470;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19463__$1,(8),jobs,inst_19452);
} else {
if((state_val_19464 === (7))){
var inst_19459 = (state_19463[(2)]);
var state_19463__$1 = state_19463;
var statearr_19471_19584 = state_19463__$1;
(statearr_19471_19584[(2)] = inst_19459);

(statearr_19471_19584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19464 === (8))){
var inst_19449 = (state_19463[(8)]);
var inst_19454 = (state_19463[(2)]);
var state_19463__$1 = (function (){var statearr_19472 = state_19463;
(statearr_19472[(9)] = inst_19454);

return statearr_19472;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19463__$1,(9),results,inst_19449);
} else {
if((state_val_19464 === (9))){
var inst_19456 = (state_19463[(2)]);
var state_19463__$1 = (function (){var statearr_19473 = state_19463;
(statearr_19473[(10)] = inst_19456);

return statearr_19473;
})();
var statearr_19474_19585 = state_19463__$1;
(statearr_19474_19585[(2)] = null);

(statearr_19474_19585[(1)] = (2));


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
});})(c__18980__auto___19579,jobs,results,process,async))
;
return ((function (switch__18866__auto__,c__18980__auto___19579,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19478[(1)] = (1));

return statearr_19478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19463){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19479){if((e19479 instanceof Object)){
var ex__18870__auto__ = e19479;
var statearr_19480_19586 = state_19463;
(statearr_19480_19586[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19587 = state_19463;
state_19463 = G__19587;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___19579,jobs,results,process,async))
})();
var state__18982__auto__ = (function (){var statearr_19481 = f__18981__auto__.call(null);
(statearr_19481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___19579);

return statearr_19481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___19579,jobs,results,process,async))
);


var c__18980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto__,jobs,results,process,async){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto__,jobs,results,process,async){
return (function (state_19519){
var state_val_19520 = (state_19519[(1)]);
if((state_val_19520 === (7))){
var inst_19515 = (state_19519[(2)]);
var state_19519__$1 = state_19519;
var statearr_19521_19588 = state_19519__$1;
(statearr_19521_19588[(2)] = inst_19515);

(statearr_19521_19588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (20))){
var state_19519__$1 = state_19519;
var statearr_19522_19589 = state_19519__$1;
(statearr_19522_19589[(2)] = null);

(statearr_19522_19589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (1))){
var state_19519__$1 = state_19519;
var statearr_19523_19590 = state_19519__$1;
(statearr_19523_19590[(2)] = null);

(statearr_19523_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (4))){
var inst_19484 = (state_19519[(7)]);
var inst_19484__$1 = (state_19519[(2)]);
var inst_19485 = (inst_19484__$1 == null);
var state_19519__$1 = (function (){var statearr_19524 = state_19519;
(statearr_19524[(7)] = inst_19484__$1);

return statearr_19524;
})();
if(cljs.core.truth_(inst_19485)){
var statearr_19525_19591 = state_19519__$1;
(statearr_19525_19591[(1)] = (5));

} else {
var statearr_19526_19592 = state_19519__$1;
(statearr_19526_19592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (15))){
var inst_19497 = (state_19519[(8)]);
var state_19519__$1 = state_19519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19519__$1,(18),to,inst_19497);
} else {
if((state_val_19520 === (21))){
var inst_19510 = (state_19519[(2)]);
var state_19519__$1 = state_19519;
var statearr_19527_19593 = state_19519__$1;
(statearr_19527_19593[(2)] = inst_19510);

(statearr_19527_19593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (13))){
var inst_19512 = (state_19519[(2)]);
var state_19519__$1 = (function (){var statearr_19528 = state_19519;
(statearr_19528[(9)] = inst_19512);

return statearr_19528;
})();
var statearr_19529_19594 = state_19519__$1;
(statearr_19529_19594[(2)] = null);

(statearr_19529_19594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (6))){
var inst_19484 = (state_19519[(7)]);
var state_19519__$1 = state_19519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19519__$1,(11),inst_19484);
} else {
if((state_val_19520 === (17))){
var inst_19505 = (state_19519[(2)]);
var state_19519__$1 = state_19519;
if(cljs.core.truth_(inst_19505)){
var statearr_19530_19595 = state_19519__$1;
(statearr_19530_19595[(1)] = (19));

} else {
var statearr_19531_19596 = state_19519__$1;
(statearr_19531_19596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (3))){
var inst_19517 = (state_19519[(2)]);
var state_19519__$1 = state_19519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19519__$1,inst_19517);
} else {
if((state_val_19520 === (12))){
var inst_19494 = (state_19519[(10)]);
var state_19519__$1 = state_19519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19519__$1,(14),inst_19494);
} else {
if((state_val_19520 === (2))){
var state_19519__$1 = state_19519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19519__$1,(4),results);
} else {
if((state_val_19520 === (19))){
var state_19519__$1 = state_19519;
var statearr_19532_19597 = state_19519__$1;
(statearr_19532_19597[(2)] = null);

(statearr_19532_19597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (11))){
var inst_19494 = (state_19519[(2)]);
var state_19519__$1 = (function (){var statearr_19533 = state_19519;
(statearr_19533[(10)] = inst_19494);

return statearr_19533;
})();
var statearr_19534_19598 = state_19519__$1;
(statearr_19534_19598[(2)] = null);

(statearr_19534_19598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (9))){
var state_19519__$1 = state_19519;
var statearr_19535_19599 = state_19519__$1;
(statearr_19535_19599[(2)] = null);

(statearr_19535_19599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (5))){
var state_19519__$1 = state_19519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19536_19600 = state_19519__$1;
(statearr_19536_19600[(1)] = (8));

} else {
var statearr_19537_19601 = state_19519__$1;
(statearr_19537_19601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (14))){
var inst_19497 = (state_19519[(8)]);
var inst_19499 = (state_19519[(11)]);
var inst_19497__$1 = (state_19519[(2)]);
var inst_19498 = (inst_19497__$1 == null);
var inst_19499__$1 = cljs.core.not.call(null,inst_19498);
var state_19519__$1 = (function (){var statearr_19538 = state_19519;
(statearr_19538[(8)] = inst_19497__$1);

(statearr_19538[(11)] = inst_19499__$1);

return statearr_19538;
})();
if(inst_19499__$1){
var statearr_19539_19602 = state_19519__$1;
(statearr_19539_19602[(1)] = (15));

} else {
var statearr_19540_19603 = state_19519__$1;
(statearr_19540_19603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (16))){
var inst_19499 = (state_19519[(11)]);
var state_19519__$1 = state_19519;
var statearr_19541_19604 = state_19519__$1;
(statearr_19541_19604[(2)] = inst_19499);

(statearr_19541_19604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (10))){
var inst_19491 = (state_19519[(2)]);
var state_19519__$1 = state_19519;
var statearr_19542_19605 = state_19519__$1;
(statearr_19542_19605[(2)] = inst_19491);

(statearr_19542_19605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (18))){
var inst_19502 = (state_19519[(2)]);
var state_19519__$1 = state_19519;
var statearr_19543_19606 = state_19519__$1;
(statearr_19543_19606[(2)] = inst_19502);

(statearr_19543_19606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19520 === (8))){
var inst_19488 = cljs.core.async.close_BANG_.call(null,to);
var state_19519__$1 = state_19519;
var statearr_19544_19607 = state_19519__$1;
(statearr_19544_19607[(2)] = inst_19488);

(statearr_19544_19607[(1)] = (10));


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
});})(c__18980__auto__,jobs,results,process,async))
;
return ((function (switch__18866__auto__,c__18980__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19548[(1)] = (1));

return statearr_19548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19519){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19549){if((e19549 instanceof Object)){
var ex__18870__auto__ = e19549;
var statearr_19550_19608 = state_19519;
(statearr_19550_19608[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19609 = state_19519;
state_19519 = G__19609;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto__,jobs,results,process,async))
})();
var state__18982__auto__ = (function (){var statearr_19551 = f__18981__auto__.call(null);
(statearr_19551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto__);

return statearr_19551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto__,jobs,results,process,async))
);

return c__18980__auto__;
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
var args19610 = [];
var len__10647__auto___19613 = arguments.length;
var i__10648__auto___19614 = (0);
while(true){
if((i__10648__auto___19614 < len__10647__auto___19613)){
args19610.push((arguments[i__10648__auto___19614]));

var G__19615 = (i__10648__auto___19614 + (1));
i__10648__auto___19614 = G__19615;
continue;
} else {
}
break;
}

var G__19612 = args19610.length;
switch (G__19612) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19610.length)].join('')));

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
var args19617 = [];
var len__10647__auto___19620 = arguments.length;
var i__10648__auto___19621 = (0);
while(true){
if((i__10648__auto___19621 < len__10647__auto___19620)){
args19617.push((arguments[i__10648__auto___19621]));

var G__19622 = (i__10648__auto___19621 + (1));
i__10648__auto___19621 = G__19622;
continue;
} else {
}
break;
}

var G__19619 = args19617.length;
switch (G__19619) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19617.length)].join('')));

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
var args19624 = [];
var len__10647__auto___19677 = arguments.length;
var i__10648__auto___19678 = (0);
while(true){
if((i__10648__auto___19678 < len__10647__auto___19677)){
args19624.push((arguments[i__10648__auto___19678]));

var G__19679 = (i__10648__auto___19678 + (1));
i__10648__auto___19678 = G__19679;
continue;
} else {
}
break;
}

var G__19626 = args19624.length;
switch (G__19626) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19624.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18980__auto___19681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___19681,tc,fc){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___19681,tc,fc){
return (function (state_19652){
var state_val_19653 = (state_19652[(1)]);
if((state_val_19653 === (7))){
var inst_19648 = (state_19652[(2)]);
var state_19652__$1 = state_19652;
var statearr_19654_19682 = state_19652__$1;
(statearr_19654_19682[(2)] = inst_19648);

(statearr_19654_19682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (1))){
var state_19652__$1 = state_19652;
var statearr_19655_19683 = state_19652__$1;
(statearr_19655_19683[(2)] = null);

(statearr_19655_19683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (4))){
var inst_19629 = (state_19652[(7)]);
var inst_19629__$1 = (state_19652[(2)]);
var inst_19630 = (inst_19629__$1 == null);
var state_19652__$1 = (function (){var statearr_19656 = state_19652;
(statearr_19656[(7)] = inst_19629__$1);

return statearr_19656;
})();
if(cljs.core.truth_(inst_19630)){
var statearr_19657_19684 = state_19652__$1;
(statearr_19657_19684[(1)] = (5));

} else {
var statearr_19658_19685 = state_19652__$1;
(statearr_19658_19685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (13))){
var state_19652__$1 = state_19652;
var statearr_19659_19686 = state_19652__$1;
(statearr_19659_19686[(2)] = null);

(statearr_19659_19686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (6))){
var inst_19629 = (state_19652[(7)]);
var inst_19635 = p.call(null,inst_19629);
var state_19652__$1 = state_19652;
if(cljs.core.truth_(inst_19635)){
var statearr_19660_19687 = state_19652__$1;
(statearr_19660_19687[(1)] = (9));

} else {
var statearr_19661_19688 = state_19652__$1;
(statearr_19661_19688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (3))){
var inst_19650 = (state_19652[(2)]);
var state_19652__$1 = state_19652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19652__$1,inst_19650);
} else {
if((state_val_19653 === (12))){
var state_19652__$1 = state_19652;
var statearr_19662_19689 = state_19652__$1;
(statearr_19662_19689[(2)] = null);

(statearr_19662_19689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (2))){
var state_19652__$1 = state_19652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19652__$1,(4),ch);
} else {
if((state_val_19653 === (11))){
var inst_19629 = (state_19652[(7)]);
var inst_19639 = (state_19652[(2)]);
var state_19652__$1 = state_19652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19652__$1,(8),inst_19639,inst_19629);
} else {
if((state_val_19653 === (9))){
var state_19652__$1 = state_19652;
var statearr_19663_19690 = state_19652__$1;
(statearr_19663_19690[(2)] = tc);

(statearr_19663_19690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (5))){
var inst_19632 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19633 = cljs.core.async.close_BANG_.call(null,fc);
var state_19652__$1 = (function (){var statearr_19664 = state_19652;
(statearr_19664[(8)] = inst_19632);

return statearr_19664;
})();
var statearr_19665_19691 = state_19652__$1;
(statearr_19665_19691[(2)] = inst_19633);

(statearr_19665_19691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (14))){
var inst_19646 = (state_19652[(2)]);
var state_19652__$1 = state_19652;
var statearr_19666_19692 = state_19652__$1;
(statearr_19666_19692[(2)] = inst_19646);

(statearr_19666_19692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (10))){
var state_19652__$1 = state_19652;
var statearr_19667_19693 = state_19652__$1;
(statearr_19667_19693[(2)] = fc);

(statearr_19667_19693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19653 === (8))){
var inst_19641 = (state_19652[(2)]);
var state_19652__$1 = state_19652;
if(cljs.core.truth_(inst_19641)){
var statearr_19668_19694 = state_19652__$1;
(statearr_19668_19694[(1)] = (12));

} else {
var statearr_19669_19695 = state_19652__$1;
(statearr_19669_19695[(1)] = (13));

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
});})(c__18980__auto___19681,tc,fc))
;
return ((function (switch__18866__auto__,c__18980__auto___19681,tc,fc){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_19673 = [null,null,null,null,null,null,null,null,null];
(statearr_19673[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_19673[(1)] = (1));

return statearr_19673;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_19652){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19674){if((e19674 instanceof Object)){
var ex__18870__auto__ = e19674;
var statearr_19675_19696 = state_19652;
(statearr_19675_19696[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19697 = state_19652;
state_19652 = G__19697;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_19652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_19652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___19681,tc,fc))
})();
var state__18982__auto__ = (function (){var statearr_19676 = f__18981__auto__.call(null);
(statearr_19676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___19681);

return statearr_19676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___19681,tc,fc))
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
var c__18980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto__){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto__){
return (function (state_19761){
var state_val_19762 = (state_19761[(1)]);
if((state_val_19762 === (7))){
var inst_19757 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
var statearr_19763_19784 = state_19761__$1;
(statearr_19763_19784[(2)] = inst_19757);

(statearr_19763_19784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (1))){
var inst_19741 = init;
var state_19761__$1 = (function (){var statearr_19764 = state_19761;
(statearr_19764[(7)] = inst_19741);

return statearr_19764;
})();
var statearr_19765_19785 = state_19761__$1;
(statearr_19765_19785[(2)] = null);

(statearr_19765_19785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (4))){
var inst_19744 = (state_19761[(8)]);
var inst_19744__$1 = (state_19761[(2)]);
var inst_19745 = (inst_19744__$1 == null);
var state_19761__$1 = (function (){var statearr_19766 = state_19761;
(statearr_19766[(8)] = inst_19744__$1);

return statearr_19766;
})();
if(cljs.core.truth_(inst_19745)){
var statearr_19767_19786 = state_19761__$1;
(statearr_19767_19786[(1)] = (5));

} else {
var statearr_19768_19787 = state_19761__$1;
(statearr_19768_19787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (6))){
var inst_19744 = (state_19761[(8)]);
var inst_19748 = (state_19761[(9)]);
var inst_19741 = (state_19761[(7)]);
var inst_19748__$1 = f.call(null,inst_19741,inst_19744);
var inst_19749 = cljs.core.reduced_QMARK_.call(null,inst_19748__$1);
var state_19761__$1 = (function (){var statearr_19769 = state_19761;
(statearr_19769[(9)] = inst_19748__$1);

return statearr_19769;
})();
if(inst_19749){
var statearr_19770_19788 = state_19761__$1;
(statearr_19770_19788[(1)] = (8));

} else {
var statearr_19771_19789 = state_19761__$1;
(statearr_19771_19789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (3))){
var inst_19759 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19761__$1,inst_19759);
} else {
if((state_val_19762 === (2))){
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19761__$1,(4),ch);
} else {
if((state_val_19762 === (9))){
var inst_19748 = (state_19761[(9)]);
var inst_19741 = inst_19748;
var state_19761__$1 = (function (){var statearr_19772 = state_19761;
(statearr_19772[(7)] = inst_19741);

return statearr_19772;
})();
var statearr_19773_19790 = state_19761__$1;
(statearr_19773_19790[(2)] = null);

(statearr_19773_19790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (5))){
var inst_19741 = (state_19761[(7)]);
var state_19761__$1 = state_19761;
var statearr_19774_19791 = state_19761__$1;
(statearr_19774_19791[(2)] = inst_19741);

(statearr_19774_19791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (10))){
var inst_19755 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
var statearr_19775_19792 = state_19761__$1;
(statearr_19775_19792[(2)] = inst_19755);

(statearr_19775_19792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (8))){
var inst_19748 = (state_19761[(9)]);
var inst_19751 = cljs.core.deref.call(null,inst_19748);
var state_19761__$1 = state_19761;
var statearr_19776_19793 = state_19761__$1;
(statearr_19776_19793[(2)] = inst_19751);

(statearr_19776_19793[(1)] = (10));


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
});})(c__18980__auto__))
;
return ((function (switch__18866__auto__,c__18980__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18867__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18867__auto____0 = (function (){
var statearr_19780 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19780[(0)] = cljs$core$async$reduce_$_state_machine__18867__auto__);

(statearr_19780[(1)] = (1));

return statearr_19780;
});
var cljs$core$async$reduce_$_state_machine__18867__auto____1 = (function (state_19761){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19781){if((e19781 instanceof Object)){
var ex__18870__auto__ = e19781;
var statearr_19782_19794 = state_19761;
(statearr_19782_19794[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19795 = state_19761;
state_19761 = G__19795;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18867__auto__ = function(state_19761){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18867__auto____1.call(this,state_19761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18867__auto____0;
cljs$core$async$reduce_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18867__auto____1;
return cljs$core$async$reduce_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto__))
})();
var state__18982__auto__ = (function (){var statearr_19783 = f__18981__auto__.call(null);
(statearr_19783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto__);

return statearr_19783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto__))
);

return c__18980__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto__,f__$1){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto__,f__$1){
return (function (state_19815){
var state_val_19816 = (state_19815[(1)]);
if((state_val_19816 === (1))){
var inst_19810 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19815__$1 = state_19815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19815__$1,(2),inst_19810);
} else {
if((state_val_19816 === (2))){
var inst_19812 = (state_19815[(2)]);
var inst_19813 = f__$1.call(null,inst_19812);
var state_19815__$1 = state_19815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19815__$1,inst_19813);
} else {
return null;
}
}
});})(c__18980__auto__,f__$1))
;
return ((function (switch__18866__auto__,c__18980__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18867__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18867__auto____0 = (function (){
var statearr_19820 = [null,null,null,null,null,null,null];
(statearr_19820[(0)] = cljs$core$async$transduce_$_state_machine__18867__auto__);

(statearr_19820[(1)] = (1));

return statearr_19820;
});
var cljs$core$async$transduce_$_state_machine__18867__auto____1 = (function (state_19815){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19821){if((e19821 instanceof Object)){
var ex__18870__auto__ = e19821;
var statearr_19822_19824 = state_19815;
(statearr_19822_19824[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19825 = state_19815;
state_19815 = G__19825;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18867__auto__ = function(state_19815){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18867__auto____1.call(this,state_19815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18867__auto____0;
cljs$core$async$transduce_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18867__auto____1;
return cljs$core$async$transduce_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto__,f__$1))
})();
var state__18982__auto__ = (function (){var statearr_19823 = f__18981__auto__.call(null);
(statearr_19823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto__);

return statearr_19823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto__,f__$1))
);

return c__18980__auto__;
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
var args19826 = [];
var len__10647__auto___19878 = arguments.length;
var i__10648__auto___19879 = (0);
while(true){
if((i__10648__auto___19879 < len__10647__auto___19878)){
args19826.push((arguments[i__10648__auto___19879]));

var G__19880 = (i__10648__auto___19879 + (1));
i__10648__auto___19879 = G__19880;
continue;
} else {
}
break;
}

var G__19828 = args19826.length;
switch (G__19828) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19826.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto__){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto__){
return (function (state_19853){
var state_val_19854 = (state_19853[(1)]);
if((state_val_19854 === (7))){
var inst_19835 = (state_19853[(2)]);
var state_19853__$1 = state_19853;
var statearr_19855_19882 = state_19853__$1;
(statearr_19855_19882[(2)] = inst_19835);

(statearr_19855_19882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (1))){
var inst_19829 = cljs.core.seq.call(null,coll);
var inst_19830 = inst_19829;
var state_19853__$1 = (function (){var statearr_19856 = state_19853;
(statearr_19856[(7)] = inst_19830);

return statearr_19856;
})();
var statearr_19857_19883 = state_19853__$1;
(statearr_19857_19883[(2)] = null);

(statearr_19857_19883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (4))){
var inst_19830 = (state_19853[(7)]);
var inst_19833 = cljs.core.first.call(null,inst_19830);
var state_19853__$1 = state_19853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19853__$1,(7),ch,inst_19833);
} else {
if((state_val_19854 === (13))){
var inst_19847 = (state_19853[(2)]);
var state_19853__$1 = state_19853;
var statearr_19858_19884 = state_19853__$1;
(statearr_19858_19884[(2)] = inst_19847);

(statearr_19858_19884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (6))){
var inst_19838 = (state_19853[(2)]);
var state_19853__$1 = state_19853;
if(cljs.core.truth_(inst_19838)){
var statearr_19859_19885 = state_19853__$1;
(statearr_19859_19885[(1)] = (8));

} else {
var statearr_19860_19886 = state_19853__$1;
(statearr_19860_19886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (3))){
var inst_19851 = (state_19853[(2)]);
var state_19853__$1 = state_19853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19853__$1,inst_19851);
} else {
if((state_val_19854 === (12))){
var state_19853__$1 = state_19853;
var statearr_19861_19887 = state_19853__$1;
(statearr_19861_19887[(2)] = null);

(statearr_19861_19887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (2))){
var inst_19830 = (state_19853[(7)]);
var state_19853__$1 = state_19853;
if(cljs.core.truth_(inst_19830)){
var statearr_19862_19888 = state_19853__$1;
(statearr_19862_19888[(1)] = (4));

} else {
var statearr_19863_19889 = state_19853__$1;
(statearr_19863_19889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (11))){
var inst_19844 = cljs.core.async.close_BANG_.call(null,ch);
var state_19853__$1 = state_19853;
var statearr_19864_19890 = state_19853__$1;
(statearr_19864_19890[(2)] = inst_19844);

(statearr_19864_19890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (9))){
var state_19853__$1 = state_19853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19865_19891 = state_19853__$1;
(statearr_19865_19891[(1)] = (11));

} else {
var statearr_19866_19892 = state_19853__$1;
(statearr_19866_19892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (5))){
var inst_19830 = (state_19853[(7)]);
var state_19853__$1 = state_19853;
var statearr_19867_19893 = state_19853__$1;
(statearr_19867_19893[(2)] = inst_19830);

(statearr_19867_19893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (10))){
var inst_19849 = (state_19853[(2)]);
var state_19853__$1 = state_19853;
var statearr_19868_19894 = state_19853__$1;
(statearr_19868_19894[(2)] = inst_19849);

(statearr_19868_19894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19854 === (8))){
var inst_19830 = (state_19853[(7)]);
var inst_19840 = cljs.core.next.call(null,inst_19830);
var inst_19830__$1 = inst_19840;
var state_19853__$1 = (function (){var statearr_19869 = state_19853;
(statearr_19869[(7)] = inst_19830__$1);

return statearr_19869;
})();
var statearr_19870_19895 = state_19853__$1;
(statearr_19870_19895[(2)] = null);

(statearr_19870_19895[(1)] = (2));


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
});})(c__18980__auto__))
;
return ((function (switch__18866__auto__,c__18980__auto__){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_19874 = [null,null,null,null,null,null,null,null];
(statearr_19874[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_19874[(1)] = (1));

return statearr_19874;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_19853){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19875){if((e19875 instanceof Object)){
var ex__18870__auto__ = e19875;
var statearr_19876_19896 = state_19853;
(statearr_19876_19896[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19897 = state_19853;
state_19853 = G__19897;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_19853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_19853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto__))
})();
var state__18982__auto__ = (function (){var statearr_19877 = f__18981__auto__.call(null);
(statearr_19877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto__);

return statearr_19877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto__))
);

return c__18980__auto__;
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
var x__10144__auto__ = (((_ == null))?null:_);
var m__10145__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,_);
} else {
var m__10145__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,_);
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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10145__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m,ch);
} else {
var m__10145__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m,ch);
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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m);
} else {
var m__10145__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20123 = (function (ch,cs,meta20124){
this.ch = ch;
this.cs = cs;
this.meta20124 = meta20124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20125,meta20124__$1){
var self__ = this;
var _20125__$1 = this;
return (new cljs.core.async.t_cljs$core$async20123(self__.ch,self__.cs,meta20124__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20125){
var self__ = this;
var _20125__$1 = this;
return self__.meta20124;
});})(cs))
;

cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20123.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20123.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20124","meta20124",-1236906095,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20123";

cljs.core.async.t_cljs$core$async20123.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async20123");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20123 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20123(ch__$1,cs__$1,meta20124){
return (new cljs.core.async.t_cljs$core$async20123(ch__$1,cs__$1,meta20124));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20123(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18980__auto___20348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___20348,cs,m,dchan,dctr,done){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___20348,cs,m,dchan,dctr,done){
return (function (state_20260){
var state_val_20261 = (state_20260[(1)]);
if((state_val_20261 === (7))){
var inst_20256 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20262_20349 = state_20260__$1;
(statearr_20262_20349[(2)] = inst_20256);

(statearr_20262_20349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (20))){
var inst_20159 = (state_20260[(7)]);
var inst_20171 = cljs.core.first.call(null,inst_20159);
var inst_20172 = cljs.core.nth.call(null,inst_20171,(0),null);
var inst_20173 = cljs.core.nth.call(null,inst_20171,(1),null);
var state_20260__$1 = (function (){var statearr_20263 = state_20260;
(statearr_20263[(8)] = inst_20172);

return statearr_20263;
})();
if(cljs.core.truth_(inst_20173)){
var statearr_20264_20350 = state_20260__$1;
(statearr_20264_20350[(1)] = (22));

} else {
var statearr_20265_20351 = state_20260__$1;
(statearr_20265_20351[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (27))){
var inst_20203 = (state_20260[(9)]);
var inst_20208 = (state_20260[(10)]);
var inst_20201 = (state_20260[(11)]);
var inst_20128 = (state_20260[(12)]);
var inst_20208__$1 = cljs.core._nth.call(null,inst_20201,inst_20203);
var inst_20209 = cljs.core.async.put_BANG_.call(null,inst_20208__$1,inst_20128,done);
var state_20260__$1 = (function (){var statearr_20266 = state_20260;
(statearr_20266[(10)] = inst_20208__$1);

return statearr_20266;
})();
if(cljs.core.truth_(inst_20209)){
var statearr_20267_20352 = state_20260__$1;
(statearr_20267_20352[(1)] = (30));

} else {
var statearr_20268_20353 = state_20260__$1;
(statearr_20268_20353[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (1))){
var state_20260__$1 = state_20260;
var statearr_20269_20354 = state_20260__$1;
(statearr_20269_20354[(2)] = null);

(statearr_20269_20354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (24))){
var inst_20159 = (state_20260[(7)]);
var inst_20178 = (state_20260[(2)]);
var inst_20179 = cljs.core.next.call(null,inst_20159);
var inst_20137 = inst_20179;
var inst_20138 = null;
var inst_20139 = (0);
var inst_20140 = (0);
var state_20260__$1 = (function (){var statearr_20270 = state_20260;
(statearr_20270[(13)] = inst_20138);

(statearr_20270[(14)] = inst_20140);

(statearr_20270[(15)] = inst_20137);

(statearr_20270[(16)] = inst_20139);

(statearr_20270[(17)] = inst_20178);

return statearr_20270;
})();
var statearr_20271_20355 = state_20260__$1;
(statearr_20271_20355[(2)] = null);

(statearr_20271_20355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (39))){
var state_20260__$1 = state_20260;
var statearr_20275_20356 = state_20260__$1;
(statearr_20275_20356[(2)] = null);

(statearr_20275_20356[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (4))){
var inst_20128 = (state_20260[(12)]);
var inst_20128__$1 = (state_20260[(2)]);
var inst_20129 = (inst_20128__$1 == null);
var state_20260__$1 = (function (){var statearr_20276 = state_20260;
(statearr_20276[(12)] = inst_20128__$1);

return statearr_20276;
})();
if(cljs.core.truth_(inst_20129)){
var statearr_20277_20357 = state_20260__$1;
(statearr_20277_20357[(1)] = (5));

} else {
var statearr_20278_20358 = state_20260__$1;
(statearr_20278_20358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (15))){
var inst_20138 = (state_20260[(13)]);
var inst_20140 = (state_20260[(14)]);
var inst_20137 = (state_20260[(15)]);
var inst_20139 = (state_20260[(16)]);
var inst_20155 = (state_20260[(2)]);
var inst_20156 = (inst_20140 + (1));
var tmp20272 = inst_20138;
var tmp20273 = inst_20137;
var tmp20274 = inst_20139;
var inst_20137__$1 = tmp20273;
var inst_20138__$1 = tmp20272;
var inst_20139__$1 = tmp20274;
var inst_20140__$1 = inst_20156;
var state_20260__$1 = (function (){var statearr_20279 = state_20260;
(statearr_20279[(13)] = inst_20138__$1);

(statearr_20279[(14)] = inst_20140__$1);

(statearr_20279[(15)] = inst_20137__$1);

(statearr_20279[(16)] = inst_20139__$1);

(statearr_20279[(18)] = inst_20155);

return statearr_20279;
})();
var statearr_20280_20359 = state_20260__$1;
(statearr_20280_20359[(2)] = null);

(statearr_20280_20359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (21))){
var inst_20182 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20284_20360 = state_20260__$1;
(statearr_20284_20360[(2)] = inst_20182);

(statearr_20284_20360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (31))){
var inst_20208 = (state_20260[(10)]);
var inst_20212 = done.call(null,null);
var inst_20213 = cljs.core.async.untap_STAR_.call(null,m,inst_20208);
var state_20260__$1 = (function (){var statearr_20285 = state_20260;
(statearr_20285[(19)] = inst_20212);

return statearr_20285;
})();
var statearr_20286_20361 = state_20260__$1;
(statearr_20286_20361[(2)] = inst_20213);

(statearr_20286_20361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (32))){
var inst_20203 = (state_20260[(9)]);
var inst_20201 = (state_20260[(11)]);
var inst_20202 = (state_20260[(20)]);
var inst_20200 = (state_20260[(21)]);
var inst_20215 = (state_20260[(2)]);
var inst_20216 = (inst_20203 + (1));
var tmp20281 = inst_20201;
var tmp20282 = inst_20202;
var tmp20283 = inst_20200;
var inst_20200__$1 = tmp20283;
var inst_20201__$1 = tmp20281;
var inst_20202__$1 = tmp20282;
var inst_20203__$1 = inst_20216;
var state_20260__$1 = (function (){var statearr_20287 = state_20260;
(statearr_20287[(9)] = inst_20203__$1);

(statearr_20287[(22)] = inst_20215);

(statearr_20287[(11)] = inst_20201__$1);

(statearr_20287[(20)] = inst_20202__$1);

(statearr_20287[(21)] = inst_20200__$1);

return statearr_20287;
})();
var statearr_20288_20362 = state_20260__$1;
(statearr_20288_20362[(2)] = null);

(statearr_20288_20362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (40))){
var inst_20228 = (state_20260[(23)]);
var inst_20232 = done.call(null,null);
var inst_20233 = cljs.core.async.untap_STAR_.call(null,m,inst_20228);
var state_20260__$1 = (function (){var statearr_20289 = state_20260;
(statearr_20289[(24)] = inst_20232);

return statearr_20289;
})();
var statearr_20290_20363 = state_20260__$1;
(statearr_20290_20363[(2)] = inst_20233);

(statearr_20290_20363[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (33))){
var inst_20219 = (state_20260[(25)]);
var inst_20221 = cljs.core.chunked_seq_QMARK_.call(null,inst_20219);
var state_20260__$1 = state_20260;
if(inst_20221){
var statearr_20291_20364 = state_20260__$1;
(statearr_20291_20364[(1)] = (36));

} else {
var statearr_20292_20365 = state_20260__$1;
(statearr_20292_20365[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (13))){
var inst_20149 = (state_20260[(26)]);
var inst_20152 = cljs.core.async.close_BANG_.call(null,inst_20149);
var state_20260__$1 = state_20260;
var statearr_20293_20366 = state_20260__$1;
(statearr_20293_20366[(2)] = inst_20152);

(statearr_20293_20366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (22))){
var inst_20172 = (state_20260[(8)]);
var inst_20175 = cljs.core.async.close_BANG_.call(null,inst_20172);
var state_20260__$1 = state_20260;
var statearr_20294_20367 = state_20260__$1;
(statearr_20294_20367[(2)] = inst_20175);

(statearr_20294_20367[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (36))){
var inst_20219 = (state_20260[(25)]);
var inst_20223 = cljs.core.chunk_first.call(null,inst_20219);
var inst_20224 = cljs.core.chunk_rest.call(null,inst_20219);
var inst_20225 = cljs.core.count.call(null,inst_20223);
var inst_20200 = inst_20224;
var inst_20201 = inst_20223;
var inst_20202 = inst_20225;
var inst_20203 = (0);
var state_20260__$1 = (function (){var statearr_20295 = state_20260;
(statearr_20295[(9)] = inst_20203);

(statearr_20295[(11)] = inst_20201);

(statearr_20295[(20)] = inst_20202);

(statearr_20295[(21)] = inst_20200);

return statearr_20295;
})();
var statearr_20296_20368 = state_20260__$1;
(statearr_20296_20368[(2)] = null);

(statearr_20296_20368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (41))){
var inst_20219 = (state_20260[(25)]);
var inst_20235 = (state_20260[(2)]);
var inst_20236 = cljs.core.next.call(null,inst_20219);
var inst_20200 = inst_20236;
var inst_20201 = null;
var inst_20202 = (0);
var inst_20203 = (0);
var state_20260__$1 = (function (){var statearr_20297 = state_20260;
(statearr_20297[(9)] = inst_20203);

(statearr_20297[(27)] = inst_20235);

(statearr_20297[(11)] = inst_20201);

(statearr_20297[(20)] = inst_20202);

(statearr_20297[(21)] = inst_20200);

return statearr_20297;
})();
var statearr_20298_20369 = state_20260__$1;
(statearr_20298_20369[(2)] = null);

(statearr_20298_20369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (43))){
var state_20260__$1 = state_20260;
var statearr_20299_20370 = state_20260__$1;
(statearr_20299_20370[(2)] = null);

(statearr_20299_20370[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (29))){
var inst_20244 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20300_20371 = state_20260__$1;
(statearr_20300_20371[(2)] = inst_20244);

(statearr_20300_20371[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (44))){
var inst_20253 = (state_20260[(2)]);
var state_20260__$1 = (function (){var statearr_20301 = state_20260;
(statearr_20301[(28)] = inst_20253);

return statearr_20301;
})();
var statearr_20302_20372 = state_20260__$1;
(statearr_20302_20372[(2)] = null);

(statearr_20302_20372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (6))){
var inst_20192 = (state_20260[(29)]);
var inst_20191 = cljs.core.deref.call(null,cs);
var inst_20192__$1 = cljs.core.keys.call(null,inst_20191);
var inst_20193 = cljs.core.count.call(null,inst_20192__$1);
var inst_20194 = cljs.core.reset_BANG_.call(null,dctr,inst_20193);
var inst_20199 = cljs.core.seq.call(null,inst_20192__$1);
var inst_20200 = inst_20199;
var inst_20201 = null;
var inst_20202 = (0);
var inst_20203 = (0);
var state_20260__$1 = (function (){var statearr_20303 = state_20260;
(statearr_20303[(9)] = inst_20203);

(statearr_20303[(11)] = inst_20201);

(statearr_20303[(30)] = inst_20194);

(statearr_20303[(29)] = inst_20192__$1);

(statearr_20303[(20)] = inst_20202);

(statearr_20303[(21)] = inst_20200);

return statearr_20303;
})();
var statearr_20304_20373 = state_20260__$1;
(statearr_20304_20373[(2)] = null);

(statearr_20304_20373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (28))){
var inst_20219 = (state_20260[(25)]);
var inst_20200 = (state_20260[(21)]);
var inst_20219__$1 = cljs.core.seq.call(null,inst_20200);
var state_20260__$1 = (function (){var statearr_20305 = state_20260;
(statearr_20305[(25)] = inst_20219__$1);

return statearr_20305;
})();
if(inst_20219__$1){
var statearr_20306_20374 = state_20260__$1;
(statearr_20306_20374[(1)] = (33));

} else {
var statearr_20307_20375 = state_20260__$1;
(statearr_20307_20375[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (25))){
var inst_20203 = (state_20260[(9)]);
var inst_20202 = (state_20260[(20)]);
var inst_20205 = (inst_20203 < inst_20202);
var inst_20206 = inst_20205;
var state_20260__$1 = state_20260;
if(cljs.core.truth_(inst_20206)){
var statearr_20308_20376 = state_20260__$1;
(statearr_20308_20376[(1)] = (27));

} else {
var statearr_20309_20377 = state_20260__$1;
(statearr_20309_20377[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (34))){
var state_20260__$1 = state_20260;
var statearr_20310_20378 = state_20260__$1;
(statearr_20310_20378[(2)] = null);

(statearr_20310_20378[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (17))){
var state_20260__$1 = state_20260;
var statearr_20311_20379 = state_20260__$1;
(statearr_20311_20379[(2)] = null);

(statearr_20311_20379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (3))){
var inst_20258 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20260__$1,inst_20258);
} else {
if((state_val_20261 === (12))){
var inst_20187 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20312_20380 = state_20260__$1;
(statearr_20312_20380[(2)] = inst_20187);

(statearr_20312_20380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (2))){
var state_20260__$1 = state_20260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20260__$1,(4),ch);
} else {
if((state_val_20261 === (23))){
var state_20260__$1 = state_20260;
var statearr_20313_20381 = state_20260__$1;
(statearr_20313_20381[(2)] = null);

(statearr_20313_20381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (35))){
var inst_20242 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20314_20382 = state_20260__$1;
(statearr_20314_20382[(2)] = inst_20242);

(statearr_20314_20382[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (19))){
var inst_20159 = (state_20260[(7)]);
var inst_20163 = cljs.core.chunk_first.call(null,inst_20159);
var inst_20164 = cljs.core.chunk_rest.call(null,inst_20159);
var inst_20165 = cljs.core.count.call(null,inst_20163);
var inst_20137 = inst_20164;
var inst_20138 = inst_20163;
var inst_20139 = inst_20165;
var inst_20140 = (0);
var state_20260__$1 = (function (){var statearr_20315 = state_20260;
(statearr_20315[(13)] = inst_20138);

(statearr_20315[(14)] = inst_20140);

(statearr_20315[(15)] = inst_20137);

(statearr_20315[(16)] = inst_20139);

return statearr_20315;
})();
var statearr_20316_20383 = state_20260__$1;
(statearr_20316_20383[(2)] = null);

(statearr_20316_20383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (11))){
var inst_20159 = (state_20260[(7)]);
var inst_20137 = (state_20260[(15)]);
var inst_20159__$1 = cljs.core.seq.call(null,inst_20137);
var state_20260__$1 = (function (){var statearr_20317 = state_20260;
(statearr_20317[(7)] = inst_20159__$1);

return statearr_20317;
})();
if(inst_20159__$1){
var statearr_20318_20384 = state_20260__$1;
(statearr_20318_20384[(1)] = (16));

} else {
var statearr_20319_20385 = state_20260__$1;
(statearr_20319_20385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (9))){
var inst_20189 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20320_20386 = state_20260__$1;
(statearr_20320_20386[(2)] = inst_20189);

(statearr_20320_20386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (5))){
var inst_20135 = cljs.core.deref.call(null,cs);
var inst_20136 = cljs.core.seq.call(null,inst_20135);
var inst_20137 = inst_20136;
var inst_20138 = null;
var inst_20139 = (0);
var inst_20140 = (0);
var state_20260__$1 = (function (){var statearr_20321 = state_20260;
(statearr_20321[(13)] = inst_20138);

(statearr_20321[(14)] = inst_20140);

(statearr_20321[(15)] = inst_20137);

(statearr_20321[(16)] = inst_20139);

return statearr_20321;
})();
var statearr_20322_20387 = state_20260__$1;
(statearr_20322_20387[(2)] = null);

(statearr_20322_20387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (14))){
var state_20260__$1 = state_20260;
var statearr_20323_20388 = state_20260__$1;
(statearr_20323_20388[(2)] = null);

(statearr_20323_20388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (45))){
var inst_20250 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20324_20389 = state_20260__$1;
(statearr_20324_20389[(2)] = inst_20250);

(statearr_20324_20389[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (26))){
var inst_20192 = (state_20260[(29)]);
var inst_20246 = (state_20260[(2)]);
var inst_20247 = cljs.core.seq.call(null,inst_20192);
var state_20260__$1 = (function (){var statearr_20325 = state_20260;
(statearr_20325[(31)] = inst_20246);

return statearr_20325;
})();
if(inst_20247){
var statearr_20326_20390 = state_20260__$1;
(statearr_20326_20390[(1)] = (42));

} else {
var statearr_20327_20391 = state_20260__$1;
(statearr_20327_20391[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (16))){
var inst_20159 = (state_20260[(7)]);
var inst_20161 = cljs.core.chunked_seq_QMARK_.call(null,inst_20159);
var state_20260__$1 = state_20260;
if(inst_20161){
var statearr_20328_20392 = state_20260__$1;
(statearr_20328_20392[(1)] = (19));

} else {
var statearr_20329_20393 = state_20260__$1;
(statearr_20329_20393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (38))){
var inst_20239 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20330_20394 = state_20260__$1;
(statearr_20330_20394[(2)] = inst_20239);

(statearr_20330_20394[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (30))){
var state_20260__$1 = state_20260;
var statearr_20331_20395 = state_20260__$1;
(statearr_20331_20395[(2)] = null);

(statearr_20331_20395[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (10))){
var inst_20138 = (state_20260[(13)]);
var inst_20140 = (state_20260[(14)]);
var inst_20148 = cljs.core._nth.call(null,inst_20138,inst_20140);
var inst_20149 = cljs.core.nth.call(null,inst_20148,(0),null);
var inst_20150 = cljs.core.nth.call(null,inst_20148,(1),null);
var state_20260__$1 = (function (){var statearr_20332 = state_20260;
(statearr_20332[(26)] = inst_20149);

return statearr_20332;
})();
if(cljs.core.truth_(inst_20150)){
var statearr_20333_20396 = state_20260__$1;
(statearr_20333_20396[(1)] = (13));

} else {
var statearr_20334_20397 = state_20260__$1;
(statearr_20334_20397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (18))){
var inst_20185 = (state_20260[(2)]);
var state_20260__$1 = state_20260;
var statearr_20335_20398 = state_20260__$1;
(statearr_20335_20398[(2)] = inst_20185);

(statearr_20335_20398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (42))){
var state_20260__$1 = state_20260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20260__$1,(45),dchan);
} else {
if((state_val_20261 === (37))){
var inst_20128 = (state_20260[(12)]);
var inst_20228 = (state_20260[(23)]);
var inst_20219 = (state_20260[(25)]);
var inst_20228__$1 = cljs.core.first.call(null,inst_20219);
var inst_20229 = cljs.core.async.put_BANG_.call(null,inst_20228__$1,inst_20128,done);
var state_20260__$1 = (function (){var statearr_20336 = state_20260;
(statearr_20336[(23)] = inst_20228__$1);

return statearr_20336;
})();
if(cljs.core.truth_(inst_20229)){
var statearr_20337_20399 = state_20260__$1;
(statearr_20337_20399[(1)] = (39));

} else {
var statearr_20338_20400 = state_20260__$1;
(statearr_20338_20400[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20261 === (8))){
var inst_20140 = (state_20260[(14)]);
var inst_20139 = (state_20260[(16)]);
var inst_20142 = (inst_20140 < inst_20139);
var inst_20143 = inst_20142;
var state_20260__$1 = state_20260;
if(cljs.core.truth_(inst_20143)){
var statearr_20339_20401 = state_20260__$1;
(statearr_20339_20401[(1)] = (10));

} else {
var statearr_20340_20402 = state_20260__$1;
(statearr_20340_20402[(1)] = (11));

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
});})(c__18980__auto___20348,cs,m,dchan,dctr,done))
;
return ((function (switch__18866__auto__,c__18980__auto___20348,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18867__auto__ = null;
var cljs$core$async$mult_$_state_machine__18867__auto____0 = (function (){
var statearr_20344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20344[(0)] = cljs$core$async$mult_$_state_machine__18867__auto__);

(statearr_20344[(1)] = (1));

return statearr_20344;
});
var cljs$core$async$mult_$_state_machine__18867__auto____1 = (function (state_20260){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_20260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e20345){if((e20345 instanceof Object)){
var ex__18870__auto__ = e20345;
var statearr_20346_20403 = state_20260;
(statearr_20346_20403[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20404 = state_20260;
state_20260 = G__20404;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18867__auto__ = function(state_20260){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18867__auto____1.call(this,state_20260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18867__auto____0;
cljs$core$async$mult_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18867__auto____1;
return cljs$core$async$mult_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___20348,cs,m,dchan,dctr,done))
})();
var state__18982__auto__ = (function (){var statearr_20347 = f__18981__auto__.call(null);
(statearr_20347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___20348);

return statearr_20347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___20348,cs,m,dchan,dctr,done))
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
var args20405 = [];
var len__10647__auto___20408 = arguments.length;
var i__10648__auto___20409 = (0);
while(true){
if((i__10648__auto___20409 < len__10647__auto___20408)){
args20405.push((arguments[i__10648__auto___20409]));

var G__20410 = (i__10648__auto___20409 + (1));
i__10648__auto___20409 = G__20410;
continue;
} else {
}
break;
}

var G__20407 = args20405.length;
switch (G__20407) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20405.length)].join('')));

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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m,ch);
} else {
var m__10145__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m,ch);
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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m,ch);
} else {
var m__10145__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m,ch);
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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m);
} else {
var m__10145__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m);
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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m,state_map);
} else {
var m__10145__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m,state_map);
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
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,m,mode);
} else {
var m__10145__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10654__auto__ = [];
var len__10647__auto___20422 = arguments.length;
var i__10648__auto___20423 = (0);
while(true){
if((i__10648__auto___20423 < len__10647__auto___20422)){
args__10654__auto__.push((arguments[i__10648__auto___20423]));

var G__20424 = (i__10648__auto___20423 + (1));
i__10648__auto___20423 = G__20424;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((3) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10655__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20416){
var map__20417 = p__20416;
var map__20417__$1 = ((((!((map__20417 == null)))?((((map__20417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20417):map__20417);
var opts = map__20417__$1;
var statearr_20419_20425 = state;
(statearr_20419_20425[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__20417,map__20417__$1,opts){
return (function (val){
var statearr_20420_20426 = state;
(statearr_20420_20426[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20417,map__20417__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_20421_20427 = state;
(statearr_20421_20427[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20412){
var G__20413 = cljs.core.first.call(null,seq20412);
var seq20412__$1 = cljs.core.next.call(null,seq20412);
var G__20414 = cljs.core.first.call(null,seq20412__$1);
var seq20412__$2 = cljs.core.next.call(null,seq20412__$1);
var G__20415 = cljs.core.first.call(null,seq20412__$2);
var seq20412__$3 = cljs.core.next.call(null,seq20412__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20413,G__20414,G__20415,seq20412__$3);
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
if(typeof cljs.core.async.t_cljs$core$async20595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20595 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta20596){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta20596 = meta20596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20597,meta20596__$1){
var self__ = this;
var _20597__$1 = this;
return (new cljs.core.async.t_cljs$core$async20595(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta20596__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20597){
var self__ = this;
var _20597__$1 = this;
return self__.meta20596;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta20596","meta20596",1447824104,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20595";

cljs.core.async.t_cljs$core$async20595.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async20595");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20595 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20595(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20596){
return (new cljs.core.async.t_cljs$core$async20595(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20596));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20595(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18980__auto___20762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___20762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___20762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20699){
var state_val_20700 = (state_20699[(1)]);
if((state_val_20700 === (7))){
var inst_20614 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
var statearr_20701_20763 = state_20699__$1;
(statearr_20701_20763[(2)] = inst_20614);

(statearr_20701_20763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (20))){
var inst_20626 = (state_20699[(7)]);
var state_20699__$1 = state_20699;
var statearr_20702_20764 = state_20699__$1;
(statearr_20702_20764[(2)] = inst_20626);

(statearr_20702_20764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (27))){
var state_20699__$1 = state_20699;
var statearr_20703_20765 = state_20699__$1;
(statearr_20703_20765[(2)] = null);

(statearr_20703_20765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (1))){
var inst_20601 = (state_20699[(8)]);
var inst_20601__$1 = calc_state.call(null);
var inst_20603 = (inst_20601__$1 == null);
var inst_20604 = cljs.core.not.call(null,inst_20603);
var state_20699__$1 = (function (){var statearr_20704 = state_20699;
(statearr_20704[(8)] = inst_20601__$1);

return statearr_20704;
})();
if(inst_20604){
var statearr_20705_20766 = state_20699__$1;
(statearr_20705_20766[(1)] = (2));

} else {
var statearr_20706_20767 = state_20699__$1;
(statearr_20706_20767[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (24))){
var inst_20673 = (state_20699[(9)]);
var inst_20659 = (state_20699[(10)]);
var inst_20650 = (state_20699[(11)]);
var inst_20673__$1 = inst_20650.call(null,inst_20659);
var state_20699__$1 = (function (){var statearr_20707 = state_20699;
(statearr_20707[(9)] = inst_20673__$1);

return statearr_20707;
})();
if(cljs.core.truth_(inst_20673__$1)){
var statearr_20708_20768 = state_20699__$1;
(statearr_20708_20768[(1)] = (29));

} else {
var statearr_20709_20769 = state_20699__$1;
(statearr_20709_20769[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (4))){
var inst_20617 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20617)){
var statearr_20710_20770 = state_20699__$1;
(statearr_20710_20770[(1)] = (8));

} else {
var statearr_20711_20771 = state_20699__$1;
(statearr_20711_20771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (15))){
var inst_20644 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20644)){
var statearr_20712_20772 = state_20699__$1;
(statearr_20712_20772[(1)] = (19));

} else {
var statearr_20713_20773 = state_20699__$1;
(statearr_20713_20773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (21))){
var inst_20649 = (state_20699[(12)]);
var inst_20649__$1 = (state_20699[(2)]);
var inst_20650 = cljs.core.get.call(null,inst_20649__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20651 = cljs.core.get.call(null,inst_20649__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20652 = cljs.core.get.call(null,inst_20649__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20699__$1 = (function (){var statearr_20714 = state_20699;
(statearr_20714[(11)] = inst_20650);

(statearr_20714[(13)] = inst_20651);

(statearr_20714[(12)] = inst_20649__$1);

return statearr_20714;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20699__$1,(22),inst_20652);
} else {
if((state_val_20700 === (31))){
var inst_20681 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20681)){
var statearr_20715_20774 = state_20699__$1;
(statearr_20715_20774[(1)] = (32));

} else {
var statearr_20716_20775 = state_20699__$1;
(statearr_20716_20775[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (32))){
var inst_20658 = (state_20699[(14)]);
var state_20699__$1 = state_20699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20699__$1,(35),out,inst_20658);
} else {
if((state_val_20700 === (33))){
var inst_20649 = (state_20699[(12)]);
var inst_20626 = inst_20649;
var state_20699__$1 = (function (){var statearr_20717 = state_20699;
(statearr_20717[(7)] = inst_20626);

return statearr_20717;
})();
var statearr_20718_20776 = state_20699__$1;
(statearr_20718_20776[(2)] = null);

(statearr_20718_20776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (13))){
var inst_20626 = (state_20699[(7)]);
var inst_20633 = inst_20626.cljs$lang$protocol_mask$partition0$;
var inst_20634 = (inst_20633 & (64));
var inst_20635 = inst_20626.cljs$core$ISeq$;
var inst_20636 = (cljs.core.PROTOCOL_SENTINEL === inst_20635);
var inst_20637 = (inst_20634) || (inst_20636);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20637)){
var statearr_20719_20777 = state_20699__$1;
(statearr_20719_20777[(1)] = (16));

} else {
var statearr_20720_20778 = state_20699__$1;
(statearr_20720_20778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (22))){
var inst_20659 = (state_20699[(10)]);
var inst_20658 = (state_20699[(14)]);
var inst_20657 = (state_20699[(2)]);
var inst_20658__$1 = cljs.core.nth.call(null,inst_20657,(0),null);
var inst_20659__$1 = cljs.core.nth.call(null,inst_20657,(1),null);
var inst_20660 = (inst_20658__$1 == null);
var inst_20661 = cljs.core._EQ_.call(null,inst_20659__$1,change);
var inst_20662 = (inst_20660) || (inst_20661);
var state_20699__$1 = (function (){var statearr_20721 = state_20699;
(statearr_20721[(10)] = inst_20659__$1);

(statearr_20721[(14)] = inst_20658__$1);

return statearr_20721;
})();
if(cljs.core.truth_(inst_20662)){
var statearr_20722_20779 = state_20699__$1;
(statearr_20722_20779[(1)] = (23));

} else {
var statearr_20723_20780 = state_20699__$1;
(statearr_20723_20780[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (36))){
var inst_20649 = (state_20699[(12)]);
var inst_20626 = inst_20649;
var state_20699__$1 = (function (){var statearr_20724 = state_20699;
(statearr_20724[(7)] = inst_20626);

return statearr_20724;
})();
var statearr_20725_20781 = state_20699__$1;
(statearr_20725_20781[(2)] = null);

(statearr_20725_20781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (29))){
var inst_20673 = (state_20699[(9)]);
var state_20699__$1 = state_20699;
var statearr_20726_20782 = state_20699__$1;
(statearr_20726_20782[(2)] = inst_20673);

(statearr_20726_20782[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (6))){
var state_20699__$1 = state_20699;
var statearr_20727_20783 = state_20699__$1;
(statearr_20727_20783[(2)] = false);

(statearr_20727_20783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (28))){
var inst_20669 = (state_20699[(2)]);
var inst_20670 = calc_state.call(null);
var inst_20626 = inst_20670;
var state_20699__$1 = (function (){var statearr_20728 = state_20699;
(statearr_20728[(15)] = inst_20669);

(statearr_20728[(7)] = inst_20626);

return statearr_20728;
})();
var statearr_20729_20784 = state_20699__$1;
(statearr_20729_20784[(2)] = null);

(statearr_20729_20784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (25))){
var inst_20695 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
var statearr_20730_20785 = state_20699__$1;
(statearr_20730_20785[(2)] = inst_20695);

(statearr_20730_20785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (34))){
var inst_20693 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
var statearr_20731_20786 = state_20699__$1;
(statearr_20731_20786[(2)] = inst_20693);

(statearr_20731_20786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (17))){
var state_20699__$1 = state_20699;
var statearr_20732_20787 = state_20699__$1;
(statearr_20732_20787[(2)] = false);

(statearr_20732_20787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (3))){
var state_20699__$1 = state_20699;
var statearr_20733_20788 = state_20699__$1;
(statearr_20733_20788[(2)] = false);

(statearr_20733_20788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (12))){
var inst_20697 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20699__$1,inst_20697);
} else {
if((state_val_20700 === (2))){
var inst_20601 = (state_20699[(8)]);
var inst_20606 = inst_20601.cljs$lang$protocol_mask$partition0$;
var inst_20607 = (inst_20606 & (64));
var inst_20608 = inst_20601.cljs$core$ISeq$;
var inst_20609 = (cljs.core.PROTOCOL_SENTINEL === inst_20608);
var inst_20610 = (inst_20607) || (inst_20609);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20610)){
var statearr_20734_20789 = state_20699__$1;
(statearr_20734_20789[(1)] = (5));

} else {
var statearr_20735_20790 = state_20699__$1;
(statearr_20735_20790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (23))){
var inst_20658 = (state_20699[(14)]);
var inst_20664 = (inst_20658 == null);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20664)){
var statearr_20736_20791 = state_20699__$1;
(statearr_20736_20791[(1)] = (26));

} else {
var statearr_20737_20792 = state_20699__$1;
(statearr_20737_20792[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (35))){
var inst_20684 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20684)){
var statearr_20738_20793 = state_20699__$1;
(statearr_20738_20793[(1)] = (36));

} else {
var statearr_20739_20794 = state_20699__$1;
(statearr_20739_20794[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (19))){
var inst_20626 = (state_20699[(7)]);
var inst_20646 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20626);
var state_20699__$1 = state_20699;
var statearr_20740_20795 = state_20699__$1;
(statearr_20740_20795[(2)] = inst_20646);

(statearr_20740_20795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (11))){
var inst_20626 = (state_20699[(7)]);
var inst_20630 = (inst_20626 == null);
var inst_20631 = cljs.core.not.call(null,inst_20630);
var state_20699__$1 = state_20699;
if(inst_20631){
var statearr_20741_20796 = state_20699__$1;
(statearr_20741_20796[(1)] = (13));

} else {
var statearr_20742_20797 = state_20699__$1;
(statearr_20742_20797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (9))){
var inst_20601 = (state_20699[(8)]);
var state_20699__$1 = state_20699;
var statearr_20743_20798 = state_20699__$1;
(statearr_20743_20798[(2)] = inst_20601);

(statearr_20743_20798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (5))){
var state_20699__$1 = state_20699;
var statearr_20744_20799 = state_20699__$1;
(statearr_20744_20799[(2)] = true);

(statearr_20744_20799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (14))){
var state_20699__$1 = state_20699;
var statearr_20745_20800 = state_20699__$1;
(statearr_20745_20800[(2)] = false);

(statearr_20745_20800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (26))){
var inst_20659 = (state_20699[(10)]);
var inst_20666 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20659);
var state_20699__$1 = state_20699;
var statearr_20746_20801 = state_20699__$1;
(statearr_20746_20801[(2)] = inst_20666);

(statearr_20746_20801[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (16))){
var state_20699__$1 = state_20699;
var statearr_20747_20802 = state_20699__$1;
(statearr_20747_20802[(2)] = true);

(statearr_20747_20802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (38))){
var inst_20689 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
var statearr_20748_20803 = state_20699__$1;
(statearr_20748_20803[(2)] = inst_20689);

(statearr_20748_20803[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (30))){
var inst_20659 = (state_20699[(10)]);
var inst_20650 = (state_20699[(11)]);
var inst_20651 = (state_20699[(13)]);
var inst_20676 = cljs.core.empty_QMARK_.call(null,inst_20650);
var inst_20677 = inst_20651.call(null,inst_20659);
var inst_20678 = cljs.core.not.call(null,inst_20677);
var inst_20679 = (inst_20676) && (inst_20678);
var state_20699__$1 = state_20699;
var statearr_20749_20804 = state_20699__$1;
(statearr_20749_20804[(2)] = inst_20679);

(statearr_20749_20804[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (10))){
var inst_20601 = (state_20699[(8)]);
var inst_20622 = (state_20699[(2)]);
var inst_20623 = cljs.core.get.call(null,inst_20622,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20624 = cljs.core.get.call(null,inst_20622,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20625 = cljs.core.get.call(null,inst_20622,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20626 = inst_20601;
var state_20699__$1 = (function (){var statearr_20750 = state_20699;
(statearr_20750[(7)] = inst_20626);

(statearr_20750[(16)] = inst_20625);

(statearr_20750[(17)] = inst_20623);

(statearr_20750[(18)] = inst_20624);

return statearr_20750;
})();
var statearr_20751_20805 = state_20699__$1;
(statearr_20751_20805[(2)] = null);

(statearr_20751_20805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (18))){
var inst_20641 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
var statearr_20752_20806 = state_20699__$1;
(statearr_20752_20806[(2)] = inst_20641);

(statearr_20752_20806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (37))){
var state_20699__$1 = state_20699;
var statearr_20753_20807 = state_20699__$1;
(statearr_20753_20807[(2)] = null);

(statearr_20753_20807[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20700 === (8))){
var inst_20601 = (state_20699[(8)]);
var inst_20619 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20601);
var state_20699__$1 = state_20699;
var statearr_20754_20808 = state_20699__$1;
(statearr_20754_20808[(2)] = inst_20619);

(statearr_20754_20808[(1)] = (10));


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
});})(c__18980__auto___20762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18866__auto__,c__18980__auto___20762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18867__auto__ = null;
var cljs$core$async$mix_$_state_machine__18867__auto____0 = (function (){
var statearr_20758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20758[(0)] = cljs$core$async$mix_$_state_machine__18867__auto__);

(statearr_20758[(1)] = (1));

return statearr_20758;
});
var cljs$core$async$mix_$_state_machine__18867__auto____1 = (function (state_20699){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_20699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e20759){if((e20759 instanceof Object)){
var ex__18870__auto__ = e20759;
var statearr_20760_20809 = state_20699;
(statearr_20760_20809[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20810 = state_20699;
state_20699 = G__20810;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18867__auto__ = function(state_20699){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18867__auto____1.call(this,state_20699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18867__auto____0;
cljs$core$async$mix_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18867__auto____1;
return cljs$core$async$mix_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___20762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18982__auto__ = (function (){var statearr_20761 = f__18981__auto__.call(null);
(statearr_20761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___20762);

return statearr_20761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___20762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10145__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,p,v,ch);
} else {
var m__10145__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20811 = [];
var len__10647__auto___20814 = arguments.length;
var i__10648__auto___20815 = (0);
while(true){
if((i__10648__auto___20815 < len__10647__auto___20814)){
args20811.push((arguments[i__10648__auto___20815]));

var G__20816 = (i__10648__auto___20815 + (1));
i__10648__auto___20815 = G__20816;
continue;
} else {
}
break;
}

var G__20813 = args20811.length;
switch (G__20813) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20811.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,p);
} else {
var m__10145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,p);
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
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return m__10145__auto__.call(null,p,v);
} else {
var m__10145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return m__10145__auto____$1.call(null,p,v);
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
var args20819 = [];
var len__10647__auto___20944 = arguments.length;
var i__10648__auto___20945 = (0);
while(true){
if((i__10648__auto___20945 < len__10647__auto___20944)){
args20819.push((arguments[i__10648__auto___20945]));

var G__20946 = (i__10648__auto___20945 + (1));
i__10648__auto___20945 = G__20946;
continue;
} else {
}
break;
}

var G__20821 = args20819.length;
switch (G__20821) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20819.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9426__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9426__auto__,mults){
return (function (p1__20818_SHARP_){
if(cljs.core.truth_(p1__20818_SHARP_.call(null,topic))){
return p1__20818_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20818_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9426__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20822 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20823){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20823 = meta20823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20824,meta20823__$1){
var self__ = this;
var _20824__$1 = this;
return (new cljs.core.async.t_cljs$core$async20822(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20823__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20824){
var self__ = this;
var _20824__$1 = this;
return self__.meta20823;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20823","meta20823",-584377135,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20822";

cljs.core.async.t_cljs$core$async20822.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async20822");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20822 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20822(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20823){
return (new cljs.core.async.t_cljs$core$async20822(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20823));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20822(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18980__auto___20948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___20948,mults,ensure_mult,p){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___20948,mults,ensure_mult,p){
return (function (state_20896){
var state_val_20897 = (state_20896[(1)]);
if((state_val_20897 === (7))){
var inst_20892 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20898_20949 = state_20896__$1;
(statearr_20898_20949[(2)] = inst_20892);

(statearr_20898_20949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (20))){
var state_20896__$1 = state_20896;
var statearr_20899_20950 = state_20896__$1;
(statearr_20899_20950[(2)] = null);

(statearr_20899_20950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (1))){
var state_20896__$1 = state_20896;
var statearr_20900_20951 = state_20896__$1;
(statearr_20900_20951[(2)] = null);

(statearr_20900_20951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (24))){
var inst_20875 = (state_20896[(7)]);
var inst_20884 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20875);
var state_20896__$1 = state_20896;
var statearr_20901_20952 = state_20896__$1;
(statearr_20901_20952[(2)] = inst_20884);

(statearr_20901_20952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (4))){
var inst_20827 = (state_20896[(8)]);
var inst_20827__$1 = (state_20896[(2)]);
var inst_20828 = (inst_20827__$1 == null);
var state_20896__$1 = (function (){var statearr_20902 = state_20896;
(statearr_20902[(8)] = inst_20827__$1);

return statearr_20902;
})();
if(cljs.core.truth_(inst_20828)){
var statearr_20903_20953 = state_20896__$1;
(statearr_20903_20953[(1)] = (5));

} else {
var statearr_20904_20954 = state_20896__$1;
(statearr_20904_20954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (15))){
var inst_20869 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20905_20955 = state_20896__$1;
(statearr_20905_20955[(2)] = inst_20869);

(statearr_20905_20955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (21))){
var inst_20889 = (state_20896[(2)]);
var state_20896__$1 = (function (){var statearr_20906 = state_20896;
(statearr_20906[(9)] = inst_20889);

return statearr_20906;
})();
var statearr_20907_20956 = state_20896__$1;
(statearr_20907_20956[(2)] = null);

(statearr_20907_20956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (13))){
var inst_20851 = (state_20896[(10)]);
var inst_20853 = cljs.core.chunked_seq_QMARK_.call(null,inst_20851);
var state_20896__$1 = state_20896;
if(inst_20853){
var statearr_20908_20957 = state_20896__$1;
(statearr_20908_20957[(1)] = (16));

} else {
var statearr_20909_20958 = state_20896__$1;
(statearr_20909_20958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (22))){
var inst_20881 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
if(cljs.core.truth_(inst_20881)){
var statearr_20910_20959 = state_20896__$1;
(statearr_20910_20959[(1)] = (23));

} else {
var statearr_20911_20960 = state_20896__$1;
(statearr_20911_20960[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (6))){
var inst_20875 = (state_20896[(7)]);
var inst_20877 = (state_20896[(11)]);
var inst_20827 = (state_20896[(8)]);
var inst_20875__$1 = topic_fn.call(null,inst_20827);
var inst_20876 = cljs.core.deref.call(null,mults);
var inst_20877__$1 = cljs.core.get.call(null,inst_20876,inst_20875__$1);
var state_20896__$1 = (function (){var statearr_20912 = state_20896;
(statearr_20912[(7)] = inst_20875__$1);

(statearr_20912[(11)] = inst_20877__$1);

return statearr_20912;
})();
if(cljs.core.truth_(inst_20877__$1)){
var statearr_20913_20961 = state_20896__$1;
(statearr_20913_20961[(1)] = (19));

} else {
var statearr_20914_20962 = state_20896__$1;
(statearr_20914_20962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (25))){
var inst_20886 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20915_20963 = state_20896__$1;
(statearr_20915_20963[(2)] = inst_20886);

(statearr_20915_20963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (17))){
var inst_20851 = (state_20896[(10)]);
var inst_20860 = cljs.core.first.call(null,inst_20851);
var inst_20861 = cljs.core.async.muxch_STAR_.call(null,inst_20860);
var inst_20862 = cljs.core.async.close_BANG_.call(null,inst_20861);
var inst_20863 = cljs.core.next.call(null,inst_20851);
var inst_20837 = inst_20863;
var inst_20838 = null;
var inst_20839 = (0);
var inst_20840 = (0);
var state_20896__$1 = (function (){var statearr_20916 = state_20896;
(statearr_20916[(12)] = inst_20840);

(statearr_20916[(13)] = inst_20862);

(statearr_20916[(14)] = inst_20839);

(statearr_20916[(15)] = inst_20837);

(statearr_20916[(16)] = inst_20838);

return statearr_20916;
})();
var statearr_20917_20964 = state_20896__$1;
(statearr_20917_20964[(2)] = null);

(statearr_20917_20964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (3))){
var inst_20894 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20896__$1,inst_20894);
} else {
if((state_val_20897 === (12))){
var inst_20871 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20918_20965 = state_20896__$1;
(statearr_20918_20965[(2)] = inst_20871);

(statearr_20918_20965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (2))){
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20896__$1,(4),ch);
} else {
if((state_val_20897 === (23))){
var state_20896__$1 = state_20896;
var statearr_20919_20966 = state_20896__$1;
(statearr_20919_20966[(2)] = null);

(statearr_20919_20966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (19))){
var inst_20877 = (state_20896[(11)]);
var inst_20827 = (state_20896[(8)]);
var inst_20879 = cljs.core.async.muxch_STAR_.call(null,inst_20877);
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20896__$1,(22),inst_20879,inst_20827);
} else {
if((state_val_20897 === (11))){
var inst_20851 = (state_20896[(10)]);
var inst_20837 = (state_20896[(15)]);
var inst_20851__$1 = cljs.core.seq.call(null,inst_20837);
var state_20896__$1 = (function (){var statearr_20920 = state_20896;
(statearr_20920[(10)] = inst_20851__$1);

return statearr_20920;
})();
if(inst_20851__$1){
var statearr_20921_20967 = state_20896__$1;
(statearr_20921_20967[(1)] = (13));

} else {
var statearr_20922_20968 = state_20896__$1;
(statearr_20922_20968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (9))){
var inst_20873 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20923_20969 = state_20896__$1;
(statearr_20923_20969[(2)] = inst_20873);

(statearr_20923_20969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (5))){
var inst_20834 = cljs.core.deref.call(null,mults);
var inst_20835 = cljs.core.vals.call(null,inst_20834);
var inst_20836 = cljs.core.seq.call(null,inst_20835);
var inst_20837 = inst_20836;
var inst_20838 = null;
var inst_20839 = (0);
var inst_20840 = (0);
var state_20896__$1 = (function (){var statearr_20924 = state_20896;
(statearr_20924[(12)] = inst_20840);

(statearr_20924[(14)] = inst_20839);

(statearr_20924[(15)] = inst_20837);

(statearr_20924[(16)] = inst_20838);

return statearr_20924;
})();
var statearr_20925_20970 = state_20896__$1;
(statearr_20925_20970[(2)] = null);

(statearr_20925_20970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (14))){
var state_20896__$1 = state_20896;
var statearr_20929_20971 = state_20896__$1;
(statearr_20929_20971[(2)] = null);

(statearr_20929_20971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (16))){
var inst_20851 = (state_20896[(10)]);
var inst_20855 = cljs.core.chunk_first.call(null,inst_20851);
var inst_20856 = cljs.core.chunk_rest.call(null,inst_20851);
var inst_20857 = cljs.core.count.call(null,inst_20855);
var inst_20837 = inst_20856;
var inst_20838 = inst_20855;
var inst_20839 = inst_20857;
var inst_20840 = (0);
var state_20896__$1 = (function (){var statearr_20930 = state_20896;
(statearr_20930[(12)] = inst_20840);

(statearr_20930[(14)] = inst_20839);

(statearr_20930[(15)] = inst_20837);

(statearr_20930[(16)] = inst_20838);

return statearr_20930;
})();
var statearr_20931_20972 = state_20896__$1;
(statearr_20931_20972[(2)] = null);

(statearr_20931_20972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (10))){
var inst_20840 = (state_20896[(12)]);
var inst_20839 = (state_20896[(14)]);
var inst_20837 = (state_20896[(15)]);
var inst_20838 = (state_20896[(16)]);
var inst_20845 = cljs.core._nth.call(null,inst_20838,inst_20840);
var inst_20846 = cljs.core.async.muxch_STAR_.call(null,inst_20845);
var inst_20847 = cljs.core.async.close_BANG_.call(null,inst_20846);
var inst_20848 = (inst_20840 + (1));
var tmp20926 = inst_20839;
var tmp20927 = inst_20837;
var tmp20928 = inst_20838;
var inst_20837__$1 = tmp20927;
var inst_20838__$1 = tmp20928;
var inst_20839__$1 = tmp20926;
var inst_20840__$1 = inst_20848;
var state_20896__$1 = (function (){var statearr_20932 = state_20896;
(statearr_20932[(12)] = inst_20840__$1);

(statearr_20932[(14)] = inst_20839__$1);

(statearr_20932[(15)] = inst_20837__$1);

(statearr_20932[(17)] = inst_20847);

(statearr_20932[(16)] = inst_20838__$1);

return statearr_20932;
})();
var statearr_20933_20973 = state_20896__$1;
(statearr_20933_20973[(2)] = null);

(statearr_20933_20973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (18))){
var inst_20866 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20934_20974 = state_20896__$1;
(statearr_20934_20974[(2)] = inst_20866);

(statearr_20934_20974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20897 === (8))){
var inst_20840 = (state_20896[(12)]);
var inst_20839 = (state_20896[(14)]);
var inst_20842 = (inst_20840 < inst_20839);
var inst_20843 = inst_20842;
var state_20896__$1 = state_20896;
if(cljs.core.truth_(inst_20843)){
var statearr_20935_20975 = state_20896__$1;
(statearr_20935_20975[(1)] = (10));

} else {
var statearr_20936_20976 = state_20896__$1;
(statearr_20936_20976[(1)] = (11));

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
});})(c__18980__auto___20948,mults,ensure_mult,p))
;
return ((function (switch__18866__auto__,c__18980__auto___20948,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_20940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20940[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_20940[(1)] = (1));

return statearr_20940;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_20896){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_20896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e20941){if((e20941 instanceof Object)){
var ex__18870__auto__ = e20941;
var statearr_20942_20977 = state_20896;
(statearr_20942_20977[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20978 = state_20896;
state_20896 = G__20978;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_20896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_20896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___20948,mults,ensure_mult,p))
})();
var state__18982__auto__ = (function (){var statearr_20943 = f__18981__auto__.call(null);
(statearr_20943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___20948);

return statearr_20943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___20948,mults,ensure_mult,p))
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
var args20979 = [];
var len__10647__auto___20982 = arguments.length;
var i__10648__auto___20983 = (0);
while(true){
if((i__10648__auto___20983 < len__10647__auto___20982)){
args20979.push((arguments[i__10648__auto___20983]));

var G__20984 = (i__10648__auto___20983 + (1));
i__10648__auto___20983 = G__20984;
continue;
} else {
}
break;
}

var G__20981 = args20979.length;
switch (G__20981) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20979.length)].join('')));

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
var args20986 = [];
var len__10647__auto___20989 = arguments.length;
var i__10648__auto___20990 = (0);
while(true){
if((i__10648__auto___20990 < len__10647__auto___20989)){
args20986.push((arguments[i__10648__auto___20990]));

var G__20991 = (i__10648__auto___20990 + (1));
i__10648__auto___20990 = G__20991;
continue;
} else {
}
break;
}

var G__20988 = args20986.length;
switch (G__20988) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20986.length)].join('')));

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
var args20993 = [];
var len__10647__auto___21064 = arguments.length;
var i__10648__auto___21065 = (0);
while(true){
if((i__10648__auto___21065 < len__10647__auto___21064)){
args20993.push((arguments[i__10648__auto___21065]));

var G__21066 = (i__10648__auto___21065 + (1));
i__10648__auto___21065 = G__21066;
continue;
} else {
}
break;
}

var G__20995 = args20993.length;
switch (G__20995) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20993.length)].join('')));

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
var c__18980__auto___21068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___21068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___21068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21034){
var state_val_21035 = (state_21034[(1)]);
if((state_val_21035 === (7))){
var state_21034__$1 = state_21034;
var statearr_21036_21069 = state_21034__$1;
(statearr_21036_21069[(2)] = null);

(statearr_21036_21069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (1))){
var state_21034__$1 = state_21034;
var statearr_21037_21070 = state_21034__$1;
(statearr_21037_21070[(2)] = null);

(statearr_21037_21070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (4))){
var inst_20998 = (state_21034[(7)]);
var inst_21000 = (inst_20998 < cnt);
var state_21034__$1 = state_21034;
if(cljs.core.truth_(inst_21000)){
var statearr_21038_21071 = state_21034__$1;
(statearr_21038_21071[(1)] = (6));

} else {
var statearr_21039_21072 = state_21034__$1;
(statearr_21039_21072[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (15))){
var inst_21030 = (state_21034[(2)]);
var state_21034__$1 = state_21034;
var statearr_21040_21073 = state_21034__$1;
(statearr_21040_21073[(2)] = inst_21030);

(statearr_21040_21073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (13))){
var inst_21023 = cljs.core.async.close_BANG_.call(null,out);
var state_21034__$1 = state_21034;
var statearr_21041_21074 = state_21034__$1;
(statearr_21041_21074[(2)] = inst_21023);

(statearr_21041_21074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (6))){
var state_21034__$1 = state_21034;
var statearr_21042_21075 = state_21034__$1;
(statearr_21042_21075[(2)] = null);

(statearr_21042_21075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (3))){
var inst_21032 = (state_21034[(2)]);
var state_21034__$1 = state_21034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21034__$1,inst_21032);
} else {
if((state_val_21035 === (12))){
var inst_21020 = (state_21034[(8)]);
var inst_21020__$1 = (state_21034[(2)]);
var inst_21021 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21020__$1);
var state_21034__$1 = (function (){var statearr_21043 = state_21034;
(statearr_21043[(8)] = inst_21020__$1);

return statearr_21043;
})();
if(cljs.core.truth_(inst_21021)){
var statearr_21044_21076 = state_21034__$1;
(statearr_21044_21076[(1)] = (13));

} else {
var statearr_21045_21077 = state_21034__$1;
(statearr_21045_21077[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (2))){
var inst_20997 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20998 = (0);
var state_21034__$1 = (function (){var statearr_21046 = state_21034;
(statearr_21046[(7)] = inst_20998);

(statearr_21046[(9)] = inst_20997);

return statearr_21046;
})();
var statearr_21047_21078 = state_21034__$1;
(statearr_21047_21078[(2)] = null);

(statearr_21047_21078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (11))){
var inst_20998 = (state_21034[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21034,(10),Object,null,(9));
var inst_21007 = chs__$1.call(null,inst_20998);
var inst_21008 = done.call(null,inst_20998);
var inst_21009 = cljs.core.async.take_BANG_.call(null,inst_21007,inst_21008);
var state_21034__$1 = state_21034;
var statearr_21048_21079 = state_21034__$1;
(statearr_21048_21079[(2)] = inst_21009);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21034__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (9))){
var inst_20998 = (state_21034[(7)]);
var inst_21011 = (state_21034[(2)]);
var inst_21012 = (inst_20998 + (1));
var inst_20998__$1 = inst_21012;
var state_21034__$1 = (function (){var statearr_21049 = state_21034;
(statearr_21049[(10)] = inst_21011);

(statearr_21049[(7)] = inst_20998__$1);

return statearr_21049;
})();
var statearr_21050_21080 = state_21034__$1;
(statearr_21050_21080[(2)] = null);

(statearr_21050_21080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (5))){
var inst_21018 = (state_21034[(2)]);
var state_21034__$1 = (function (){var statearr_21051 = state_21034;
(statearr_21051[(11)] = inst_21018);

return statearr_21051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21034__$1,(12),dchan);
} else {
if((state_val_21035 === (14))){
var inst_21020 = (state_21034[(8)]);
var inst_21025 = cljs.core.apply.call(null,f,inst_21020);
var state_21034__$1 = state_21034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21034__$1,(16),out,inst_21025);
} else {
if((state_val_21035 === (16))){
var inst_21027 = (state_21034[(2)]);
var state_21034__$1 = (function (){var statearr_21052 = state_21034;
(statearr_21052[(12)] = inst_21027);

return statearr_21052;
})();
var statearr_21053_21081 = state_21034__$1;
(statearr_21053_21081[(2)] = null);

(statearr_21053_21081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (10))){
var inst_21002 = (state_21034[(2)]);
var inst_21003 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21034__$1 = (function (){var statearr_21054 = state_21034;
(statearr_21054[(13)] = inst_21002);

return statearr_21054;
})();
var statearr_21055_21082 = state_21034__$1;
(statearr_21055_21082[(2)] = inst_21003);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21034__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (8))){
var inst_21016 = (state_21034[(2)]);
var state_21034__$1 = state_21034;
var statearr_21056_21083 = state_21034__$1;
(statearr_21056_21083[(2)] = inst_21016);

(statearr_21056_21083[(1)] = (5));


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
});})(c__18980__auto___21068,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18866__auto__,c__18980__auto___21068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21060[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21060[(1)] = (1));

return statearr_21060;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21034){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21061){if((e21061 instanceof Object)){
var ex__18870__auto__ = e21061;
var statearr_21062_21084 = state_21034;
(statearr_21062_21084[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21085 = state_21034;
state_21034 = G__21085;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___21068,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18982__auto__ = (function (){var statearr_21063 = f__18981__auto__.call(null);
(statearr_21063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___21068);

return statearr_21063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___21068,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21087 = [];
var len__10647__auto___21145 = arguments.length;
var i__10648__auto___21146 = (0);
while(true){
if((i__10648__auto___21146 < len__10647__auto___21145)){
args21087.push((arguments[i__10648__auto___21146]));

var G__21147 = (i__10648__auto___21146 + (1));
i__10648__auto___21146 = G__21147;
continue;
} else {
}
break;
}

var G__21089 = args21087.length;
switch (G__21089) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21087.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18980__auto___21149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___21149,out){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___21149,out){
return (function (state_21121){
var state_val_21122 = (state_21121[(1)]);
if((state_val_21122 === (7))){
var inst_21101 = (state_21121[(7)]);
var inst_21100 = (state_21121[(8)]);
var inst_21100__$1 = (state_21121[(2)]);
var inst_21101__$1 = cljs.core.nth.call(null,inst_21100__$1,(0),null);
var inst_21102 = cljs.core.nth.call(null,inst_21100__$1,(1),null);
var inst_21103 = (inst_21101__$1 == null);
var state_21121__$1 = (function (){var statearr_21123 = state_21121;
(statearr_21123[(7)] = inst_21101__$1);

(statearr_21123[(9)] = inst_21102);

(statearr_21123[(8)] = inst_21100__$1);

return statearr_21123;
})();
if(cljs.core.truth_(inst_21103)){
var statearr_21124_21150 = state_21121__$1;
(statearr_21124_21150[(1)] = (8));

} else {
var statearr_21125_21151 = state_21121__$1;
(statearr_21125_21151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (1))){
var inst_21090 = cljs.core.vec.call(null,chs);
var inst_21091 = inst_21090;
var state_21121__$1 = (function (){var statearr_21126 = state_21121;
(statearr_21126[(10)] = inst_21091);

return statearr_21126;
})();
var statearr_21127_21152 = state_21121__$1;
(statearr_21127_21152[(2)] = null);

(statearr_21127_21152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (4))){
var inst_21091 = (state_21121[(10)]);
var state_21121__$1 = state_21121;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21121__$1,(7),inst_21091);
} else {
if((state_val_21122 === (6))){
var inst_21117 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21128_21153 = state_21121__$1;
(statearr_21128_21153[(2)] = inst_21117);

(statearr_21128_21153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (3))){
var inst_21119 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21121__$1,inst_21119);
} else {
if((state_val_21122 === (2))){
var inst_21091 = (state_21121[(10)]);
var inst_21093 = cljs.core.count.call(null,inst_21091);
var inst_21094 = (inst_21093 > (0));
var state_21121__$1 = state_21121;
if(cljs.core.truth_(inst_21094)){
var statearr_21130_21154 = state_21121__$1;
(statearr_21130_21154[(1)] = (4));

} else {
var statearr_21131_21155 = state_21121__$1;
(statearr_21131_21155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (11))){
var inst_21091 = (state_21121[(10)]);
var inst_21110 = (state_21121[(2)]);
var tmp21129 = inst_21091;
var inst_21091__$1 = tmp21129;
var state_21121__$1 = (function (){var statearr_21132 = state_21121;
(statearr_21132[(10)] = inst_21091__$1);

(statearr_21132[(11)] = inst_21110);

return statearr_21132;
})();
var statearr_21133_21156 = state_21121__$1;
(statearr_21133_21156[(2)] = null);

(statearr_21133_21156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (9))){
var inst_21101 = (state_21121[(7)]);
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21121__$1,(11),out,inst_21101);
} else {
if((state_val_21122 === (5))){
var inst_21115 = cljs.core.async.close_BANG_.call(null,out);
var state_21121__$1 = state_21121;
var statearr_21134_21157 = state_21121__$1;
(statearr_21134_21157[(2)] = inst_21115);

(statearr_21134_21157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (10))){
var inst_21113 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21135_21158 = state_21121__$1;
(statearr_21135_21158[(2)] = inst_21113);

(statearr_21135_21158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (8))){
var inst_21101 = (state_21121[(7)]);
var inst_21102 = (state_21121[(9)]);
var inst_21091 = (state_21121[(10)]);
var inst_21100 = (state_21121[(8)]);
var inst_21105 = (function (){var cs = inst_21091;
var vec__21096 = inst_21100;
var v = inst_21101;
var c = inst_21102;
return ((function (cs,vec__21096,v,c,inst_21101,inst_21102,inst_21091,inst_21100,state_val_21122,c__18980__auto___21149,out){
return (function (p1__21086_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21086_SHARP_);
});
;})(cs,vec__21096,v,c,inst_21101,inst_21102,inst_21091,inst_21100,state_val_21122,c__18980__auto___21149,out))
})();
var inst_21106 = cljs.core.filterv.call(null,inst_21105,inst_21091);
var inst_21091__$1 = inst_21106;
var state_21121__$1 = (function (){var statearr_21136 = state_21121;
(statearr_21136[(10)] = inst_21091__$1);

return statearr_21136;
})();
var statearr_21137_21159 = state_21121__$1;
(statearr_21137_21159[(2)] = null);

(statearr_21137_21159[(1)] = (2));


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
});})(c__18980__auto___21149,out))
;
return ((function (switch__18866__auto__,c__18980__auto___21149,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21141[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21141[(1)] = (1));

return statearr_21141;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21121){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21142){if((e21142 instanceof Object)){
var ex__18870__auto__ = e21142;
var statearr_21143_21160 = state_21121;
(statearr_21143_21160[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21161 = state_21121;
state_21121 = G__21161;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___21149,out))
})();
var state__18982__auto__ = (function (){var statearr_21144 = f__18981__auto__.call(null);
(statearr_21144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___21149);

return statearr_21144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___21149,out))
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
var args21162 = [];
var len__10647__auto___21211 = arguments.length;
var i__10648__auto___21212 = (0);
while(true){
if((i__10648__auto___21212 < len__10647__auto___21211)){
args21162.push((arguments[i__10648__auto___21212]));

var G__21213 = (i__10648__auto___21212 + (1));
i__10648__auto___21212 = G__21213;
continue;
} else {
}
break;
}

var G__21164 = args21162.length;
switch (G__21164) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21162.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18980__auto___21215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___21215,out){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___21215,out){
return (function (state_21188){
var state_val_21189 = (state_21188[(1)]);
if((state_val_21189 === (7))){
var inst_21170 = (state_21188[(7)]);
var inst_21170__$1 = (state_21188[(2)]);
var inst_21171 = (inst_21170__$1 == null);
var inst_21172 = cljs.core.not.call(null,inst_21171);
var state_21188__$1 = (function (){var statearr_21190 = state_21188;
(statearr_21190[(7)] = inst_21170__$1);

return statearr_21190;
})();
if(inst_21172){
var statearr_21191_21216 = state_21188__$1;
(statearr_21191_21216[(1)] = (8));

} else {
var statearr_21192_21217 = state_21188__$1;
(statearr_21192_21217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (1))){
var inst_21165 = (0);
var state_21188__$1 = (function (){var statearr_21193 = state_21188;
(statearr_21193[(8)] = inst_21165);

return statearr_21193;
})();
var statearr_21194_21218 = state_21188__$1;
(statearr_21194_21218[(2)] = null);

(statearr_21194_21218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (4))){
var state_21188__$1 = state_21188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21188__$1,(7),ch);
} else {
if((state_val_21189 === (6))){
var inst_21183 = (state_21188[(2)]);
var state_21188__$1 = state_21188;
var statearr_21195_21219 = state_21188__$1;
(statearr_21195_21219[(2)] = inst_21183);

(statearr_21195_21219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (3))){
var inst_21185 = (state_21188[(2)]);
var inst_21186 = cljs.core.async.close_BANG_.call(null,out);
var state_21188__$1 = (function (){var statearr_21196 = state_21188;
(statearr_21196[(9)] = inst_21185);

return statearr_21196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21188__$1,inst_21186);
} else {
if((state_val_21189 === (2))){
var inst_21165 = (state_21188[(8)]);
var inst_21167 = (inst_21165 < n);
var state_21188__$1 = state_21188;
if(cljs.core.truth_(inst_21167)){
var statearr_21197_21220 = state_21188__$1;
(statearr_21197_21220[(1)] = (4));

} else {
var statearr_21198_21221 = state_21188__$1;
(statearr_21198_21221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (11))){
var inst_21165 = (state_21188[(8)]);
var inst_21175 = (state_21188[(2)]);
var inst_21176 = (inst_21165 + (1));
var inst_21165__$1 = inst_21176;
var state_21188__$1 = (function (){var statearr_21199 = state_21188;
(statearr_21199[(10)] = inst_21175);

(statearr_21199[(8)] = inst_21165__$1);

return statearr_21199;
})();
var statearr_21200_21222 = state_21188__$1;
(statearr_21200_21222[(2)] = null);

(statearr_21200_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (9))){
var state_21188__$1 = state_21188;
var statearr_21201_21223 = state_21188__$1;
(statearr_21201_21223[(2)] = null);

(statearr_21201_21223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (5))){
var state_21188__$1 = state_21188;
var statearr_21202_21224 = state_21188__$1;
(statearr_21202_21224[(2)] = null);

(statearr_21202_21224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (10))){
var inst_21180 = (state_21188[(2)]);
var state_21188__$1 = state_21188;
var statearr_21203_21225 = state_21188__$1;
(statearr_21203_21225[(2)] = inst_21180);

(statearr_21203_21225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (8))){
var inst_21170 = (state_21188[(7)]);
var state_21188__$1 = state_21188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21188__$1,(11),out,inst_21170);
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
});})(c__18980__auto___21215,out))
;
return ((function (switch__18866__auto__,c__18980__auto___21215,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21207[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21207[(1)] = (1));

return statearr_21207;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21188){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21208){if((e21208 instanceof Object)){
var ex__18870__auto__ = e21208;
var statearr_21209_21226 = state_21188;
(statearr_21209_21226[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21227 = state_21188;
state_21188 = G__21227;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21188);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___21215,out))
})();
var state__18982__auto__ = (function (){var statearr_21210 = f__18981__auto__.call(null);
(statearr_21210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___21215);

return statearr_21210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___21215,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21235 = (function (f,ch,meta21236){
this.f = f;
this.ch = ch;
this.meta21236 = meta21236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21237,meta21236__$1){
var self__ = this;
var _21237__$1 = this;
return (new cljs.core.async.t_cljs$core$async21235(self__.f,self__.ch,meta21236__$1));
});

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21237){
var self__ = this;
var _21237__$1 = this;
return self__.meta21236;
});

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21238 = (function (f,ch,meta21236,_,fn1,meta21239){
this.f = f;
this.ch = ch;
this.meta21236 = meta21236;
this._ = _;
this.fn1 = fn1;
this.meta21239 = meta21239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21240,meta21239__$1){
var self__ = this;
var _21240__$1 = this;
return (new cljs.core.async.t_cljs$core$async21238(self__.f,self__.ch,self__.meta21236,self__._,self__.fn1,meta21239__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21240){
var self__ = this;
var _21240__$1 = this;
return self__.meta21239;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21228_SHARP_){
return f1.call(null,(((p1__21228_SHARP_ == null))?null:self__.f.call(null,p1__21228_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21238.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21236","meta21236",1976928059,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21235","cljs.core.async/t_cljs$core$async21235",578979685,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21239","meta21239",238325069,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21238";

cljs.core.async.t_cljs$core$async21238.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async21238");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21238 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21238(f__$1,ch__$1,meta21236__$1,___$2,fn1__$1,meta21239){
return (new cljs.core.async.t_cljs$core$async21238(f__$1,ch__$1,meta21236__$1,___$2,fn1__$1,meta21239));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21238(self__.f,self__.ch,self__.meta21236,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9414__auto__ = ret;
if(cljs.core.truth_(and__9414__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9414__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21236","meta21236",1976928059,null)], null);
});

cljs.core.async.t_cljs$core$async21235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21235";

cljs.core.async.t_cljs$core$async21235.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async21235");
});

cljs.core.async.__GT_t_cljs$core$async21235 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21235(f__$1,ch__$1,meta21236){
return (new cljs.core.async.t_cljs$core$async21235(f__$1,ch__$1,meta21236));
});

}

return (new cljs.core.async.t_cljs$core$async21235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21244 = (function (f,ch,meta21245){
this.f = f;
this.ch = ch;
this.meta21245 = meta21245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21246,meta21245__$1){
var self__ = this;
var _21246__$1 = this;
return (new cljs.core.async.t_cljs$core$async21244(self__.f,self__.ch,meta21245__$1));
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21246){
var self__ = this;
var _21246__$1 = this;
return self__.meta21245;
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21245","meta21245",-2122693965,null)], null);
});

cljs.core.async.t_cljs$core$async21244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21244";

cljs.core.async.t_cljs$core$async21244.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async21244");
});

cljs.core.async.__GT_t_cljs$core$async21244 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21244(f__$1,ch__$1,meta21245){
return (new cljs.core.async.t_cljs$core$async21244(f__$1,ch__$1,meta21245));
});

}

return (new cljs.core.async.t_cljs$core$async21244(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21250 = (function (p,ch,meta21251){
this.p = p;
this.ch = ch;
this.meta21251 = meta21251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21252,meta21251__$1){
var self__ = this;
var _21252__$1 = this;
return (new cljs.core.async.t_cljs$core$async21250(self__.p,self__.ch,meta21251__$1));
});

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21252){
var self__ = this;
var _21252__$1 = this;
return self__.meta21251;
});

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21251","meta21251",-1314237164,null)], null);
});

cljs.core.async.t_cljs$core$async21250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21250";

cljs.core.async.t_cljs$core$async21250.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write.call(null,writer__10084__auto__,"cljs.core.async/t_cljs$core$async21250");
});

cljs.core.async.__GT_t_cljs$core$async21250 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21250(p__$1,ch__$1,meta21251){
return (new cljs.core.async.t_cljs$core$async21250(p__$1,ch__$1,meta21251));
});

}

return (new cljs.core.async.t_cljs$core$async21250(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21253 = [];
var len__10647__auto___21297 = arguments.length;
var i__10648__auto___21298 = (0);
while(true){
if((i__10648__auto___21298 < len__10647__auto___21297)){
args21253.push((arguments[i__10648__auto___21298]));

var G__21299 = (i__10648__auto___21298 + (1));
i__10648__auto___21298 = G__21299;
continue;
} else {
}
break;
}

var G__21255 = args21253.length;
switch (G__21255) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21253.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18980__auto___21301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___21301,out){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___21301,out){
return (function (state_21276){
var state_val_21277 = (state_21276[(1)]);
if((state_val_21277 === (7))){
var inst_21272 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
var statearr_21278_21302 = state_21276__$1;
(statearr_21278_21302[(2)] = inst_21272);

(statearr_21278_21302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (1))){
var state_21276__$1 = state_21276;
var statearr_21279_21303 = state_21276__$1;
(statearr_21279_21303[(2)] = null);

(statearr_21279_21303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (4))){
var inst_21258 = (state_21276[(7)]);
var inst_21258__$1 = (state_21276[(2)]);
var inst_21259 = (inst_21258__$1 == null);
var state_21276__$1 = (function (){var statearr_21280 = state_21276;
(statearr_21280[(7)] = inst_21258__$1);

return statearr_21280;
})();
if(cljs.core.truth_(inst_21259)){
var statearr_21281_21304 = state_21276__$1;
(statearr_21281_21304[(1)] = (5));

} else {
var statearr_21282_21305 = state_21276__$1;
(statearr_21282_21305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (6))){
var inst_21258 = (state_21276[(7)]);
var inst_21263 = p.call(null,inst_21258);
var state_21276__$1 = state_21276;
if(cljs.core.truth_(inst_21263)){
var statearr_21283_21306 = state_21276__$1;
(statearr_21283_21306[(1)] = (8));

} else {
var statearr_21284_21307 = state_21276__$1;
(statearr_21284_21307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (3))){
var inst_21274 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21276__$1,inst_21274);
} else {
if((state_val_21277 === (2))){
var state_21276__$1 = state_21276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21276__$1,(4),ch);
} else {
if((state_val_21277 === (11))){
var inst_21266 = (state_21276[(2)]);
var state_21276__$1 = state_21276;
var statearr_21285_21308 = state_21276__$1;
(statearr_21285_21308[(2)] = inst_21266);

(statearr_21285_21308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (9))){
var state_21276__$1 = state_21276;
var statearr_21286_21309 = state_21276__$1;
(statearr_21286_21309[(2)] = null);

(statearr_21286_21309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (5))){
var inst_21261 = cljs.core.async.close_BANG_.call(null,out);
var state_21276__$1 = state_21276;
var statearr_21287_21310 = state_21276__$1;
(statearr_21287_21310[(2)] = inst_21261);

(statearr_21287_21310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (10))){
var inst_21269 = (state_21276[(2)]);
var state_21276__$1 = (function (){var statearr_21288 = state_21276;
(statearr_21288[(8)] = inst_21269);

return statearr_21288;
})();
var statearr_21289_21311 = state_21276__$1;
(statearr_21289_21311[(2)] = null);

(statearr_21289_21311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21277 === (8))){
var inst_21258 = (state_21276[(7)]);
var state_21276__$1 = state_21276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21276__$1,(11),out,inst_21258);
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
});})(c__18980__auto___21301,out))
;
return ((function (switch__18866__auto__,c__18980__auto___21301,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21293 = [null,null,null,null,null,null,null,null,null];
(statearr_21293[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21293[(1)] = (1));

return statearr_21293;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21276){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21294){if((e21294 instanceof Object)){
var ex__18870__auto__ = e21294;
var statearr_21295_21312 = state_21276;
(statearr_21295_21312[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21313 = state_21276;
state_21276 = G__21313;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___21301,out))
})();
var state__18982__auto__ = (function (){var statearr_21296 = f__18981__auto__.call(null);
(statearr_21296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___21301);

return statearr_21296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___21301,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21314 = [];
var len__10647__auto___21317 = arguments.length;
var i__10648__auto___21318 = (0);
while(true){
if((i__10648__auto___21318 < len__10647__auto___21317)){
args21314.push((arguments[i__10648__auto___21318]));

var G__21319 = (i__10648__auto___21318 + (1));
i__10648__auto___21318 = G__21319;
continue;
} else {
}
break;
}

var G__21316 = args21314.length;
switch (G__21316) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21314.length)].join('')));

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
var c__18980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto__){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto__){
return (function (state_21486){
var state_val_21487 = (state_21486[(1)]);
if((state_val_21487 === (7))){
var inst_21482 = (state_21486[(2)]);
var state_21486__$1 = state_21486;
var statearr_21488_21529 = state_21486__$1;
(statearr_21488_21529[(2)] = inst_21482);

(statearr_21488_21529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (20))){
var inst_21452 = (state_21486[(7)]);
var inst_21463 = (state_21486[(2)]);
var inst_21464 = cljs.core.next.call(null,inst_21452);
var inst_21438 = inst_21464;
var inst_21439 = null;
var inst_21440 = (0);
var inst_21441 = (0);
var state_21486__$1 = (function (){var statearr_21489 = state_21486;
(statearr_21489[(8)] = inst_21440);

(statearr_21489[(9)] = inst_21439);

(statearr_21489[(10)] = inst_21441);

(statearr_21489[(11)] = inst_21438);

(statearr_21489[(12)] = inst_21463);

return statearr_21489;
})();
var statearr_21490_21530 = state_21486__$1;
(statearr_21490_21530[(2)] = null);

(statearr_21490_21530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (1))){
var state_21486__$1 = state_21486;
var statearr_21491_21531 = state_21486__$1;
(statearr_21491_21531[(2)] = null);

(statearr_21491_21531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (4))){
var inst_21427 = (state_21486[(13)]);
var inst_21427__$1 = (state_21486[(2)]);
var inst_21428 = (inst_21427__$1 == null);
var state_21486__$1 = (function (){var statearr_21492 = state_21486;
(statearr_21492[(13)] = inst_21427__$1);

return statearr_21492;
})();
if(cljs.core.truth_(inst_21428)){
var statearr_21493_21532 = state_21486__$1;
(statearr_21493_21532[(1)] = (5));

} else {
var statearr_21494_21533 = state_21486__$1;
(statearr_21494_21533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (15))){
var state_21486__$1 = state_21486;
var statearr_21498_21534 = state_21486__$1;
(statearr_21498_21534[(2)] = null);

(statearr_21498_21534[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (21))){
var state_21486__$1 = state_21486;
var statearr_21499_21535 = state_21486__$1;
(statearr_21499_21535[(2)] = null);

(statearr_21499_21535[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (13))){
var inst_21440 = (state_21486[(8)]);
var inst_21439 = (state_21486[(9)]);
var inst_21441 = (state_21486[(10)]);
var inst_21438 = (state_21486[(11)]);
var inst_21448 = (state_21486[(2)]);
var inst_21449 = (inst_21441 + (1));
var tmp21495 = inst_21440;
var tmp21496 = inst_21439;
var tmp21497 = inst_21438;
var inst_21438__$1 = tmp21497;
var inst_21439__$1 = tmp21496;
var inst_21440__$1 = tmp21495;
var inst_21441__$1 = inst_21449;
var state_21486__$1 = (function (){var statearr_21500 = state_21486;
(statearr_21500[(8)] = inst_21440__$1);

(statearr_21500[(9)] = inst_21439__$1);

(statearr_21500[(10)] = inst_21441__$1);

(statearr_21500[(14)] = inst_21448);

(statearr_21500[(11)] = inst_21438__$1);

return statearr_21500;
})();
var statearr_21501_21536 = state_21486__$1;
(statearr_21501_21536[(2)] = null);

(statearr_21501_21536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (22))){
var state_21486__$1 = state_21486;
var statearr_21502_21537 = state_21486__$1;
(statearr_21502_21537[(2)] = null);

(statearr_21502_21537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (6))){
var inst_21427 = (state_21486[(13)]);
var inst_21436 = f.call(null,inst_21427);
var inst_21437 = cljs.core.seq.call(null,inst_21436);
var inst_21438 = inst_21437;
var inst_21439 = null;
var inst_21440 = (0);
var inst_21441 = (0);
var state_21486__$1 = (function (){var statearr_21503 = state_21486;
(statearr_21503[(8)] = inst_21440);

(statearr_21503[(9)] = inst_21439);

(statearr_21503[(10)] = inst_21441);

(statearr_21503[(11)] = inst_21438);

return statearr_21503;
})();
var statearr_21504_21538 = state_21486__$1;
(statearr_21504_21538[(2)] = null);

(statearr_21504_21538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (17))){
var inst_21452 = (state_21486[(7)]);
var inst_21456 = cljs.core.chunk_first.call(null,inst_21452);
var inst_21457 = cljs.core.chunk_rest.call(null,inst_21452);
var inst_21458 = cljs.core.count.call(null,inst_21456);
var inst_21438 = inst_21457;
var inst_21439 = inst_21456;
var inst_21440 = inst_21458;
var inst_21441 = (0);
var state_21486__$1 = (function (){var statearr_21505 = state_21486;
(statearr_21505[(8)] = inst_21440);

(statearr_21505[(9)] = inst_21439);

(statearr_21505[(10)] = inst_21441);

(statearr_21505[(11)] = inst_21438);

return statearr_21505;
})();
var statearr_21506_21539 = state_21486__$1;
(statearr_21506_21539[(2)] = null);

(statearr_21506_21539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (3))){
var inst_21484 = (state_21486[(2)]);
var state_21486__$1 = state_21486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21486__$1,inst_21484);
} else {
if((state_val_21487 === (12))){
var inst_21472 = (state_21486[(2)]);
var state_21486__$1 = state_21486;
var statearr_21507_21540 = state_21486__$1;
(statearr_21507_21540[(2)] = inst_21472);

(statearr_21507_21540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (2))){
var state_21486__$1 = state_21486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21486__$1,(4),in$);
} else {
if((state_val_21487 === (23))){
var inst_21480 = (state_21486[(2)]);
var state_21486__$1 = state_21486;
var statearr_21508_21541 = state_21486__$1;
(statearr_21508_21541[(2)] = inst_21480);

(statearr_21508_21541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (19))){
var inst_21467 = (state_21486[(2)]);
var state_21486__$1 = state_21486;
var statearr_21509_21542 = state_21486__$1;
(statearr_21509_21542[(2)] = inst_21467);

(statearr_21509_21542[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (11))){
var inst_21438 = (state_21486[(11)]);
var inst_21452 = (state_21486[(7)]);
var inst_21452__$1 = cljs.core.seq.call(null,inst_21438);
var state_21486__$1 = (function (){var statearr_21510 = state_21486;
(statearr_21510[(7)] = inst_21452__$1);

return statearr_21510;
})();
if(inst_21452__$1){
var statearr_21511_21543 = state_21486__$1;
(statearr_21511_21543[(1)] = (14));

} else {
var statearr_21512_21544 = state_21486__$1;
(statearr_21512_21544[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (9))){
var inst_21474 = (state_21486[(2)]);
var inst_21475 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21486__$1 = (function (){var statearr_21513 = state_21486;
(statearr_21513[(15)] = inst_21474);

return statearr_21513;
})();
if(cljs.core.truth_(inst_21475)){
var statearr_21514_21545 = state_21486__$1;
(statearr_21514_21545[(1)] = (21));

} else {
var statearr_21515_21546 = state_21486__$1;
(statearr_21515_21546[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (5))){
var inst_21430 = cljs.core.async.close_BANG_.call(null,out);
var state_21486__$1 = state_21486;
var statearr_21516_21547 = state_21486__$1;
(statearr_21516_21547[(2)] = inst_21430);

(statearr_21516_21547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (14))){
var inst_21452 = (state_21486[(7)]);
var inst_21454 = cljs.core.chunked_seq_QMARK_.call(null,inst_21452);
var state_21486__$1 = state_21486;
if(inst_21454){
var statearr_21517_21548 = state_21486__$1;
(statearr_21517_21548[(1)] = (17));

} else {
var statearr_21518_21549 = state_21486__$1;
(statearr_21518_21549[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (16))){
var inst_21470 = (state_21486[(2)]);
var state_21486__$1 = state_21486;
var statearr_21519_21550 = state_21486__$1;
(statearr_21519_21550[(2)] = inst_21470);

(statearr_21519_21550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21487 === (10))){
var inst_21439 = (state_21486[(9)]);
var inst_21441 = (state_21486[(10)]);
var inst_21446 = cljs.core._nth.call(null,inst_21439,inst_21441);
var state_21486__$1 = state_21486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21486__$1,(13),out,inst_21446);
} else {
if((state_val_21487 === (18))){
var inst_21452 = (state_21486[(7)]);
var inst_21461 = cljs.core.first.call(null,inst_21452);
var state_21486__$1 = state_21486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21486__$1,(20),out,inst_21461);
} else {
if((state_val_21487 === (8))){
var inst_21440 = (state_21486[(8)]);
var inst_21441 = (state_21486[(10)]);
var inst_21443 = (inst_21441 < inst_21440);
var inst_21444 = inst_21443;
var state_21486__$1 = state_21486;
if(cljs.core.truth_(inst_21444)){
var statearr_21520_21551 = state_21486__$1;
(statearr_21520_21551[(1)] = (10));

} else {
var statearr_21521_21552 = state_21486__$1;
(statearr_21521_21552[(1)] = (11));

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
});})(c__18980__auto__))
;
return ((function (switch__18866__auto__,c__18980__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_21525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21525[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__);

(statearr_21525[(1)] = (1));

return statearr_21525;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____1 = (function (state_21486){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21526){if((e21526 instanceof Object)){
var ex__18870__auto__ = e21526;
var statearr_21527_21553 = state_21486;
(statearr_21527_21553[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21554 = state_21486;
state_21486 = G__21554;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__ = function(state_21486){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____1.call(this,state_21486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto__))
})();
var state__18982__auto__ = (function (){var statearr_21528 = f__18981__auto__.call(null);
(statearr_21528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto__);

return statearr_21528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto__))
);

return c__18980__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21555 = [];
var len__10647__auto___21558 = arguments.length;
var i__10648__auto___21559 = (0);
while(true){
if((i__10648__auto___21559 < len__10647__auto___21558)){
args21555.push((arguments[i__10648__auto___21559]));

var G__21560 = (i__10648__auto___21559 + (1));
i__10648__auto___21559 = G__21560;
continue;
} else {
}
break;
}

var G__21557 = args21555.length;
switch (G__21557) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21555.length)].join('')));

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
var args21562 = [];
var len__10647__auto___21565 = arguments.length;
var i__10648__auto___21566 = (0);
while(true){
if((i__10648__auto___21566 < len__10647__auto___21565)){
args21562.push((arguments[i__10648__auto___21566]));

var G__21567 = (i__10648__auto___21566 + (1));
i__10648__auto___21566 = G__21567;
continue;
} else {
}
break;
}

var G__21564 = args21562.length;
switch (G__21564) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21562.length)].join('')));

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
var args21569 = [];
var len__10647__auto___21620 = arguments.length;
var i__10648__auto___21621 = (0);
while(true){
if((i__10648__auto___21621 < len__10647__auto___21620)){
args21569.push((arguments[i__10648__auto___21621]));

var G__21622 = (i__10648__auto___21621 + (1));
i__10648__auto___21621 = G__21622;
continue;
} else {
}
break;
}

var G__21571 = args21569.length;
switch (G__21571) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21569.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18980__auto___21624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___21624,out){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___21624,out){
return (function (state_21595){
var state_val_21596 = (state_21595[(1)]);
if((state_val_21596 === (7))){
var inst_21590 = (state_21595[(2)]);
var state_21595__$1 = state_21595;
var statearr_21597_21625 = state_21595__$1;
(statearr_21597_21625[(2)] = inst_21590);

(statearr_21597_21625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21596 === (1))){
var inst_21572 = null;
var state_21595__$1 = (function (){var statearr_21598 = state_21595;
(statearr_21598[(7)] = inst_21572);

return statearr_21598;
})();
var statearr_21599_21626 = state_21595__$1;
(statearr_21599_21626[(2)] = null);

(statearr_21599_21626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21596 === (4))){
var inst_21575 = (state_21595[(8)]);
var inst_21575__$1 = (state_21595[(2)]);
var inst_21576 = (inst_21575__$1 == null);
var inst_21577 = cljs.core.not.call(null,inst_21576);
var state_21595__$1 = (function (){var statearr_21600 = state_21595;
(statearr_21600[(8)] = inst_21575__$1);

return statearr_21600;
})();
if(inst_21577){
var statearr_21601_21627 = state_21595__$1;
(statearr_21601_21627[(1)] = (5));

} else {
var statearr_21602_21628 = state_21595__$1;
(statearr_21602_21628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21596 === (6))){
var state_21595__$1 = state_21595;
var statearr_21603_21629 = state_21595__$1;
(statearr_21603_21629[(2)] = null);

(statearr_21603_21629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21596 === (3))){
var inst_21592 = (state_21595[(2)]);
var inst_21593 = cljs.core.async.close_BANG_.call(null,out);
var state_21595__$1 = (function (){var statearr_21604 = state_21595;
(statearr_21604[(9)] = inst_21592);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21595__$1,inst_21593);
} else {
if((state_val_21596 === (2))){
var state_21595__$1 = state_21595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21595__$1,(4),ch);
} else {
if((state_val_21596 === (11))){
var inst_21575 = (state_21595[(8)]);
var inst_21584 = (state_21595[(2)]);
var inst_21572 = inst_21575;
var state_21595__$1 = (function (){var statearr_21605 = state_21595;
(statearr_21605[(7)] = inst_21572);

(statearr_21605[(10)] = inst_21584);

return statearr_21605;
})();
var statearr_21606_21630 = state_21595__$1;
(statearr_21606_21630[(2)] = null);

(statearr_21606_21630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21596 === (9))){
var inst_21575 = (state_21595[(8)]);
var state_21595__$1 = state_21595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21595__$1,(11),out,inst_21575);
} else {
if((state_val_21596 === (5))){
var inst_21572 = (state_21595[(7)]);
var inst_21575 = (state_21595[(8)]);
var inst_21579 = cljs.core._EQ_.call(null,inst_21575,inst_21572);
var state_21595__$1 = state_21595;
if(inst_21579){
var statearr_21608_21631 = state_21595__$1;
(statearr_21608_21631[(1)] = (8));

} else {
var statearr_21609_21632 = state_21595__$1;
(statearr_21609_21632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21596 === (10))){
var inst_21587 = (state_21595[(2)]);
var state_21595__$1 = state_21595;
var statearr_21610_21633 = state_21595__$1;
(statearr_21610_21633[(2)] = inst_21587);

(statearr_21610_21633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21596 === (8))){
var inst_21572 = (state_21595[(7)]);
var tmp21607 = inst_21572;
var inst_21572__$1 = tmp21607;
var state_21595__$1 = (function (){var statearr_21611 = state_21595;
(statearr_21611[(7)] = inst_21572__$1);

return statearr_21611;
})();
var statearr_21612_21634 = state_21595__$1;
(statearr_21612_21634[(2)] = null);

(statearr_21612_21634[(1)] = (2));


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
});})(c__18980__auto___21624,out))
;
return ((function (switch__18866__auto__,c__18980__auto___21624,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21616[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21616[(1)] = (1));

return statearr_21616;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21595){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21617){if((e21617 instanceof Object)){
var ex__18870__auto__ = e21617;
var statearr_21618_21635 = state_21595;
(statearr_21618_21635[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21636 = state_21595;
state_21595 = G__21636;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___21624,out))
})();
var state__18982__auto__ = (function (){var statearr_21619 = f__18981__auto__.call(null);
(statearr_21619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___21624);

return statearr_21619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___21624,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21637 = [];
var len__10647__auto___21707 = arguments.length;
var i__10648__auto___21708 = (0);
while(true){
if((i__10648__auto___21708 < len__10647__auto___21707)){
args21637.push((arguments[i__10648__auto___21708]));

var G__21709 = (i__10648__auto___21708 + (1));
i__10648__auto___21708 = G__21709;
continue;
} else {
}
break;
}

var G__21639 = args21637.length;
switch (G__21639) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21637.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18980__auto___21711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___21711,out){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___21711,out){
return (function (state_21677){
var state_val_21678 = (state_21677[(1)]);
if((state_val_21678 === (7))){
var inst_21673 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21679_21712 = state_21677__$1;
(statearr_21679_21712[(2)] = inst_21673);

(statearr_21679_21712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (1))){
var inst_21640 = (new Array(n));
var inst_21641 = inst_21640;
var inst_21642 = (0);
var state_21677__$1 = (function (){var statearr_21680 = state_21677;
(statearr_21680[(7)] = inst_21642);

(statearr_21680[(8)] = inst_21641);

return statearr_21680;
})();
var statearr_21681_21713 = state_21677__$1;
(statearr_21681_21713[(2)] = null);

(statearr_21681_21713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (4))){
var inst_21645 = (state_21677[(9)]);
var inst_21645__$1 = (state_21677[(2)]);
var inst_21646 = (inst_21645__$1 == null);
var inst_21647 = cljs.core.not.call(null,inst_21646);
var state_21677__$1 = (function (){var statearr_21682 = state_21677;
(statearr_21682[(9)] = inst_21645__$1);

return statearr_21682;
})();
if(inst_21647){
var statearr_21683_21714 = state_21677__$1;
(statearr_21683_21714[(1)] = (5));

} else {
var statearr_21684_21715 = state_21677__$1;
(statearr_21684_21715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (15))){
var inst_21667 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21685_21716 = state_21677__$1;
(statearr_21685_21716[(2)] = inst_21667);

(statearr_21685_21716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (13))){
var state_21677__$1 = state_21677;
var statearr_21686_21717 = state_21677__$1;
(statearr_21686_21717[(2)] = null);

(statearr_21686_21717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (6))){
var inst_21642 = (state_21677[(7)]);
var inst_21663 = (inst_21642 > (0));
var state_21677__$1 = state_21677;
if(cljs.core.truth_(inst_21663)){
var statearr_21687_21718 = state_21677__$1;
(statearr_21687_21718[(1)] = (12));

} else {
var statearr_21688_21719 = state_21677__$1;
(statearr_21688_21719[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (3))){
var inst_21675 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21677__$1,inst_21675);
} else {
if((state_val_21678 === (12))){
var inst_21641 = (state_21677[(8)]);
var inst_21665 = cljs.core.vec.call(null,inst_21641);
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21677__$1,(15),out,inst_21665);
} else {
if((state_val_21678 === (2))){
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21677__$1,(4),ch);
} else {
if((state_val_21678 === (11))){
var inst_21657 = (state_21677[(2)]);
var inst_21658 = (new Array(n));
var inst_21641 = inst_21658;
var inst_21642 = (0);
var state_21677__$1 = (function (){var statearr_21689 = state_21677;
(statearr_21689[(10)] = inst_21657);

(statearr_21689[(7)] = inst_21642);

(statearr_21689[(8)] = inst_21641);

return statearr_21689;
})();
var statearr_21690_21720 = state_21677__$1;
(statearr_21690_21720[(2)] = null);

(statearr_21690_21720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (9))){
var inst_21641 = (state_21677[(8)]);
var inst_21655 = cljs.core.vec.call(null,inst_21641);
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21677__$1,(11),out,inst_21655);
} else {
if((state_val_21678 === (5))){
var inst_21642 = (state_21677[(7)]);
var inst_21645 = (state_21677[(9)]);
var inst_21650 = (state_21677[(11)]);
var inst_21641 = (state_21677[(8)]);
var inst_21649 = (inst_21641[inst_21642] = inst_21645);
var inst_21650__$1 = (inst_21642 + (1));
var inst_21651 = (inst_21650__$1 < n);
var state_21677__$1 = (function (){var statearr_21691 = state_21677;
(statearr_21691[(12)] = inst_21649);

(statearr_21691[(11)] = inst_21650__$1);

return statearr_21691;
})();
if(cljs.core.truth_(inst_21651)){
var statearr_21692_21721 = state_21677__$1;
(statearr_21692_21721[(1)] = (8));

} else {
var statearr_21693_21722 = state_21677__$1;
(statearr_21693_21722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (14))){
var inst_21670 = (state_21677[(2)]);
var inst_21671 = cljs.core.async.close_BANG_.call(null,out);
var state_21677__$1 = (function (){var statearr_21695 = state_21677;
(statearr_21695[(13)] = inst_21670);

return statearr_21695;
})();
var statearr_21696_21723 = state_21677__$1;
(statearr_21696_21723[(2)] = inst_21671);

(statearr_21696_21723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (10))){
var inst_21661 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21697_21724 = state_21677__$1;
(statearr_21697_21724[(2)] = inst_21661);

(statearr_21697_21724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (8))){
var inst_21650 = (state_21677[(11)]);
var inst_21641 = (state_21677[(8)]);
var tmp21694 = inst_21641;
var inst_21641__$1 = tmp21694;
var inst_21642 = inst_21650;
var state_21677__$1 = (function (){var statearr_21698 = state_21677;
(statearr_21698[(7)] = inst_21642);

(statearr_21698[(8)] = inst_21641__$1);

return statearr_21698;
})();
var statearr_21699_21725 = state_21677__$1;
(statearr_21699_21725[(2)] = null);

(statearr_21699_21725[(1)] = (2));


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
});})(c__18980__auto___21711,out))
;
return ((function (switch__18866__auto__,c__18980__auto___21711,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21703[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21703[(1)] = (1));

return statearr_21703;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21677){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21704){if((e21704 instanceof Object)){
var ex__18870__auto__ = e21704;
var statearr_21705_21726 = state_21677;
(statearr_21705_21726[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21727 = state_21677;
state_21677 = G__21727;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___21711,out))
})();
var state__18982__auto__ = (function (){var statearr_21706 = f__18981__auto__.call(null);
(statearr_21706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___21711);

return statearr_21706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___21711,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21728 = [];
var len__10647__auto___21802 = arguments.length;
var i__10648__auto___21803 = (0);
while(true){
if((i__10648__auto___21803 < len__10647__auto___21802)){
args21728.push((arguments[i__10648__auto___21803]));

var G__21804 = (i__10648__auto___21803 + (1));
i__10648__auto___21803 = G__21804;
continue;
} else {
}
break;
}

var G__21730 = args21728.length;
switch (G__21730) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21728.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18980__auto___21806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18980__auto___21806,out){
return (function (){
var f__18981__auto__ = (function (){var switch__18866__auto__ = ((function (c__18980__auto___21806,out){
return (function (state_21772){
var state_val_21773 = (state_21772[(1)]);
if((state_val_21773 === (7))){
var inst_21768 = (state_21772[(2)]);
var state_21772__$1 = state_21772;
var statearr_21774_21807 = state_21772__$1;
(statearr_21774_21807[(2)] = inst_21768);

(statearr_21774_21807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (1))){
var inst_21731 = [];
var inst_21732 = inst_21731;
var inst_21733 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21772__$1 = (function (){var statearr_21775 = state_21772;
(statearr_21775[(7)] = inst_21733);

(statearr_21775[(8)] = inst_21732);

return statearr_21775;
})();
var statearr_21776_21808 = state_21772__$1;
(statearr_21776_21808[(2)] = null);

(statearr_21776_21808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (4))){
var inst_21736 = (state_21772[(9)]);
var inst_21736__$1 = (state_21772[(2)]);
var inst_21737 = (inst_21736__$1 == null);
var inst_21738 = cljs.core.not.call(null,inst_21737);
var state_21772__$1 = (function (){var statearr_21777 = state_21772;
(statearr_21777[(9)] = inst_21736__$1);

return statearr_21777;
})();
if(inst_21738){
var statearr_21778_21809 = state_21772__$1;
(statearr_21778_21809[(1)] = (5));

} else {
var statearr_21779_21810 = state_21772__$1;
(statearr_21779_21810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (15))){
var inst_21762 = (state_21772[(2)]);
var state_21772__$1 = state_21772;
var statearr_21780_21811 = state_21772__$1;
(statearr_21780_21811[(2)] = inst_21762);

(statearr_21780_21811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (13))){
var state_21772__$1 = state_21772;
var statearr_21781_21812 = state_21772__$1;
(statearr_21781_21812[(2)] = null);

(statearr_21781_21812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (6))){
var inst_21732 = (state_21772[(8)]);
var inst_21757 = inst_21732.length;
var inst_21758 = (inst_21757 > (0));
var state_21772__$1 = state_21772;
if(cljs.core.truth_(inst_21758)){
var statearr_21782_21813 = state_21772__$1;
(statearr_21782_21813[(1)] = (12));

} else {
var statearr_21783_21814 = state_21772__$1;
(statearr_21783_21814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (3))){
var inst_21770 = (state_21772[(2)]);
var state_21772__$1 = state_21772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21772__$1,inst_21770);
} else {
if((state_val_21773 === (12))){
var inst_21732 = (state_21772[(8)]);
var inst_21760 = cljs.core.vec.call(null,inst_21732);
var state_21772__$1 = state_21772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21772__$1,(15),out,inst_21760);
} else {
if((state_val_21773 === (2))){
var state_21772__$1 = state_21772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21772__$1,(4),ch);
} else {
if((state_val_21773 === (11))){
var inst_21736 = (state_21772[(9)]);
var inst_21740 = (state_21772[(10)]);
var inst_21750 = (state_21772[(2)]);
var inst_21751 = [];
var inst_21752 = inst_21751.push(inst_21736);
var inst_21732 = inst_21751;
var inst_21733 = inst_21740;
var state_21772__$1 = (function (){var statearr_21784 = state_21772;
(statearr_21784[(11)] = inst_21752);

(statearr_21784[(7)] = inst_21733);

(statearr_21784[(8)] = inst_21732);

(statearr_21784[(12)] = inst_21750);

return statearr_21784;
})();
var statearr_21785_21815 = state_21772__$1;
(statearr_21785_21815[(2)] = null);

(statearr_21785_21815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (9))){
var inst_21732 = (state_21772[(8)]);
var inst_21748 = cljs.core.vec.call(null,inst_21732);
var state_21772__$1 = state_21772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21772__$1,(11),out,inst_21748);
} else {
if((state_val_21773 === (5))){
var inst_21736 = (state_21772[(9)]);
var inst_21733 = (state_21772[(7)]);
var inst_21740 = (state_21772[(10)]);
var inst_21740__$1 = f.call(null,inst_21736);
var inst_21741 = cljs.core._EQ_.call(null,inst_21740__$1,inst_21733);
var inst_21742 = cljs.core.keyword_identical_QMARK_.call(null,inst_21733,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21743 = (inst_21741) || (inst_21742);
var state_21772__$1 = (function (){var statearr_21786 = state_21772;
(statearr_21786[(10)] = inst_21740__$1);

return statearr_21786;
})();
if(cljs.core.truth_(inst_21743)){
var statearr_21787_21816 = state_21772__$1;
(statearr_21787_21816[(1)] = (8));

} else {
var statearr_21788_21817 = state_21772__$1;
(statearr_21788_21817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (14))){
var inst_21765 = (state_21772[(2)]);
var inst_21766 = cljs.core.async.close_BANG_.call(null,out);
var state_21772__$1 = (function (){var statearr_21790 = state_21772;
(statearr_21790[(13)] = inst_21765);

return statearr_21790;
})();
var statearr_21791_21818 = state_21772__$1;
(statearr_21791_21818[(2)] = inst_21766);

(statearr_21791_21818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (10))){
var inst_21755 = (state_21772[(2)]);
var state_21772__$1 = state_21772;
var statearr_21792_21819 = state_21772__$1;
(statearr_21792_21819[(2)] = inst_21755);

(statearr_21792_21819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (8))){
var inst_21736 = (state_21772[(9)]);
var inst_21732 = (state_21772[(8)]);
var inst_21740 = (state_21772[(10)]);
var inst_21745 = inst_21732.push(inst_21736);
var tmp21789 = inst_21732;
var inst_21732__$1 = tmp21789;
var inst_21733 = inst_21740;
var state_21772__$1 = (function (){var statearr_21793 = state_21772;
(statearr_21793[(14)] = inst_21745);

(statearr_21793[(7)] = inst_21733);

(statearr_21793[(8)] = inst_21732__$1);

return statearr_21793;
})();
var statearr_21794_21820 = state_21772__$1;
(statearr_21794_21820[(2)] = null);

(statearr_21794_21820[(1)] = (2));


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
});})(c__18980__auto___21806,out))
;
return ((function (switch__18866__auto__,c__18980__auto___21806,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21798[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21798[(1)] = (1));

return statearr_21798;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21772){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21799){if((e21799 instanceof Object)){
var ex__18870__auto__ = e21799;
var statearr_21800_21821 = state_21772;
(statearr_21800_21821[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21822 = state_21772;
state_21772 = G__21822;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18980__auto___21806,out))
})();
var state__18982__auto__ = (function (){var statearr_21801 = f__18981__auto__.call(null);
(statearr_21801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18980__auto___21806);

return statearr_21801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18982__auto__);
});})(c__18980__auto___21806,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

