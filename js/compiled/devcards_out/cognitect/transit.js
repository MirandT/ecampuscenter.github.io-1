// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__34252_34256 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__34253_34257 = null;
var count__34254_34258 = (0);
var i__34255_34259 = (0);
while(true){
if((i__34255_34259 < count__34254_34258)){
var k_34260 = cljs.core._nth.call(null,chunk__34253_34257,i__34255_34259);
var v_34261 = (b[k_34260]);
(a[k_34260] = v_34261);

var G__34262 = seq__34252_34256;
var G__34263 = chunk__34253_34257;
var G__34264 = count__34254_34258;
var G__34265 = (i__34255_34259 + (1));
seq__34252_34256 = G__34262;
chunk__34253_34257 = G__34263;
count__34254_34258 = G__34264;
i__34255_34259 = G__34265;
continue;
} else {
var temp__4657__auto___34266 = cljs.core.seq.call(null,seq__34252_34256);
if(temp__4657__auto___34266){
var seq__34252_34267__$1 = temp__4657__auto___34266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34252_34267__$1)){
var c__25571__auto___34268 = cljs.core.chunk_first.call(null,seq__34252_34267__$1);
var G__34269 = cljs.core.chunk_rest.call(null,seq__34252_34267__$1);
var G__34270 = c__25571__auto___34268;
var G__34271 = cljs.core.count.call(null,c__25571__auto___34268);
var G__34272 = (0);
seq__34252_34256 = G__34269;
chunk__34253_34257 = G__34270;
count__34254_34258 = G__34271;
i__34255_34259 = G__34272;
continue;
} else {
var k_34273 = cljs.core.first.call(null,seq__34252_34267__$1);
var v_34274 = (b[k_34273]);
(a[k_34273] = v_34274);

var G__34275 = cljs.core.next.call(null,seq__34252_34267__$1);
var G__34276 = null;
var G__34277 = (0);
var G__34278 = (0);
seq__34252_34256 = G__34275;
chunk__34253_34257 = G__34276;
count__34254_34258 = G__34277;
i__34255_34259 = G__34278;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args34279 = [];
var len__25835__auto___34282 = arguments.length;
var i__25836__auto___34283 = (0);
while(true){
if((i__25836__auto___34283 < len__25835__auto___34282)){
args34279.push((arguments[i__25836__auto___34283]));

var G__34284 = (i__25836__auto___34283 + (1));
i__25836__auto___34283 = G__34284;
continue;
} else {
}
break;
}

var G__34281 = args34279.length;
switch (G__34281) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34279.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__34286 = (i + (2));
var G__34287 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__34286;
ret = G__34287;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34288_34292 = cljs.core.seq.call(null,v);
var chunk__34289_34293 = null;
var count__34290_34294 = (0);
var i__34291_34295 = (0);
while(true){
if((i__34291_34295 < count__34290_34294)){
var x_34296 = cljs.core._nth.call(null,chunk__34289_34293,i__34291_34295);
ret.push(x_34296);

var G__34297 = seq__34288_34292;
var G__34298 = chunk__34289_34293;
var G__34299 = count__34290_34294;
var G__34300 = (i__34291_34295 + (1));
seq__34288_34292 = G__34297;
chunk__34289_34293 = G__34298;
count__34290_34294 = G__34299;
i__34291_34295 = G__34300;
continue;
} else {
var temp__4657__auto___34301 = cljs.core.seq.call(null,seq__34288_34292);
if(temp__4657__auto___34301){
var seq__34288_34302__$1 = temp__4657__auto___34301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34288_34302__$1)){
var c__25571__auto___34303 = cljs.core.chunk_first.call(null,seq__34288_34302__$1);
var G__34304 = cljs.core.chunk_rest.call(null,seq__34288_34302__$1);
var G__34305 = c__25571__auto___34303;
var G__34306 = cljs.core.count.call(null,c__25571__auto___34303);
var G__34307 = (0);
seq__34288_34292 = G__34304;
chunk__34289_34293 = G__34305;
count__34290_34294 = G__34306;
i__34291_34295 = G__34307;
continue;
} else {
var x_34308 = cljs.core.first.call(null,seq__34288_34302__$1);
ret.push(x_34308);

var G__34309 = cljs.core.next.call(null,seq__34288_34302__$1);
var G__34310 = null;
var G__34311 = (0);
var G__34312 = (0);
seq__34288_34292 = G__34309;
chunk__34289_34293 = G__34310;
count__34290_34294 = G__34311;
i__34291_34295 = G__34312;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34313_34317 = cljs.core.seq.call(null,v);
var chunk__34314_34318 = null;
var count__34315_34319 = (0);
var i__34316_34320 = (0);
while(true){
if((i__34316_34320 < count__34315_34319)){
var x_34321 = cljs.core._nth.call(null,chunk__34314_34318,i__34316_34320);
ret.push(x_34321);

var G__34322 = seq__34313_34317;
var G__34323 = chunk__34314_34318;
var G__34324 = count__34315_34319;
var G__34325 = (i__34316_34320 + (1));
seq__34313_34317 = G__34322;
chunk__34314_34318 = G__34323;
count__34315_34319 = G__34324;
i__34316_34320 = G__34325;
continue;
} else {
var temp__4657__auto___34326 = cljs.core.seq.call(null,seq__34313_34317);
if(temp__4657__auto___34326){
var seq__34313_34327__$1 = temp__4657__auto___34326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34313_34327__$1)){
var c__25571__auto___34328 = cljs.core.chunk_first.call(null,seq__34313_34327__$1);
var G__34329 = cljs.core.chunk_rest.call(null,seq__34313_34327__$1);
var G__34330 = c__25571__auto___34328;
var G__34331 = cljs.core.count.call(null,c__25571__auto___34328);
var G__34332 = (0);
seq__34313_34317 = G__34329;
chunk__34314_34318 = G__34330;
count__34315_34319 = G__34331;
i__34316_34320 = G__34332;
continue;
} else {
var x_34333 = cljs.core.first.call(null,seq__34313_34327__$1);
ret.push(x_34333);

var G__34334 = cljs.core.next.call(null,seq__34313_34327__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__34313_34317 = G__34334;
chunk__34314_34318 = G__34335;
count__34315_34319 = G__34336;
i__34316_34320 = G__34337;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34338_34342 = cljs.core.seq.call(null,v);
var chunk__34339_34343 = null;
var count__34340_34344 = (0);
var i__34341_34345 = (0);
while(true){
if((i__34341_34345 < count__34340_34344)){
var x_34346 = cljs.core._nth.call(null,chunk__34339_34343,i__34341_34345);
ret.push(x_34346);

var G__34347 = seq__34338_34342;
var G__34348 = chunk__34339_34343;
var G__34349 = count__34340_34344;
var G__34350 = (i__34341_34345 + (1));
seq__34338_34342 = G__34347;
chunk__34339_34343 = G__34348;
count__34340_34344 = G__34349;
i__34341_34345 = G__34350;
continue;
} else {
var temp__4657__auto___34351 = cljs.core.seq.call(null,seq__34338_34342);
if(temp__4657__auto___34351){
var seq__34338_34352__$1 = temp__4657__auto___34351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34338_34352__$1)){
var c__25571__auto___34353 = cljs.core.chunk_first.call(null,seq__34338_34352__$1);
var G__34354 = cljs.core.chunk_rest.call(null,seq__34338_34352__$1);
var G__34355 = c__25571__auto___34353;
var G__34356 = cljs.core.count.call(null,c__25571__auto___34353);
var G__34357 = (0);
seq__34338_34342 = G__34354;
chunk__34339_34343 = G__34355;
count__34340_34344 = G__34356;
i__34341_34345 = G__34357;
continue;
} else {
var x_34358 = cljs.core.first.call(null,seq__34338_34352__$1);
ret.push(x_34358);

var G__34359 = cljs.core.next.call(null,seq__34338_34352__$1);
var G__34360 = null;
var G__34361 = (0);
var G__34362 = (0);
seq__34338_34342 = G__34359;
chunk__34339_34343 = G__34360;
count__34340_34344 = G__34361;
i__34341_34345 = G__34362;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args34363 = [];
var len__25835__auto___34378 = arguments.length;
var i__25836__auto___34379 = (0);
while(true){
if((i__25836__auto___34379 < len__25835__auto___34378)){
args34363.push((arguments[i__25836__auto___34379]));

var G__34380 = (i__25836__auto___34379 + (1));
i__25836__auto___34379 = G__34380;
continue;
} else {
}
break;
}

var G__34365 = args34363.length;
switch (G__34365) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34363.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__34366 = obj;
G__34366.push(kfn.call(null,k),vfn.call(null,v));

return G__34366;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x34367 = cljs.core.clone.call(null,handlers);
x34367.forEach = ((function (x34367,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__34368 = cljs.core.seq.call(null,coll);
var chunk__34369 = null;
var count__34370 = (0);
var i__34371 = (0);
while(true){
if((i__34371 < count__34370)){
var vec__34372 = cljs.core._nth.call(null,chunk__34369,i__34371);
var k = cljs.core.nth.call(null,vec__34372,(0),null);
var v = cljs.core.nth.call(null,vec__34372,(1),null);
f.call(null,v,k);

var G__34382 = seq__34368;
var G__34383 = chunk__34369;
var G__34384 = count__34370;
var G__34385 = (i__34371 + (1));
seq__34368 = G__34382;
chunk__34369 = G__34383;
count__34370 = G__34384;
i__34371 = G__34385;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34368);
if(temp__4657__auto__){
var seq__34368__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34368__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__34368__$1);
var G__34386 = cljs.core.chunk_rest.call(null,seq__34368__$1);
var G__34387 = c__25571__auto__;
var G__34388 = cljs.core.count.call(null,c__25571__auto__);
var G__34389 = (0);
seq__34368 = G__34386;
chunk__34369 = G__34387;
count__34370 = G__34388;
i__34371 = G__34389;
continue;
} else {
var vec__34375 = cljs.core.first.call(null,seq__34368__$1);
var k = cljs.core.nth.call(null,vec__34375,(0),null);
var v = cljs.core.nth.call(null,vec__34375,(1),null);
f.call(null,v,k);

var G__34390 = cljs.core.next.call(null,seq__34368__$1);
var G__34391 = null;
var G__34392 = (0);
var G__34393 = (0);
seq__34368 = G__34390;
chunk__34369 = G__34391;
count__34370 = G__34392;
i__34371 = G__34393;
continue;
}
} else {
return null;
}
}
break;
}
});})(x34367,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x34367;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args34394 = [];
var len__25835__auto___34400 = arguments.length;
var i__25836__auto___34401 = (0);
while(true){
if((i__25836__auto___34401 < len__25835__auto___34400)){
args34394.push((arguments[i__25836__auto___34401]));

var G__34402 = (i__25836__auto___34401 + (1));
i__25836__auto___34401 = G__34402;
continue;
} else {
}
break;
}

var G__34396 = args34394.length;
switch (G__34396) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34394.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit34397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit34397 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta34398){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta34398 = meta34398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit34397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34399,meta34398__$1){
var self__ = this;
var _34399__$1 = this;
return (new cognitect.transit.t_cognitect$transit34397(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta34398__$1));
});

cognitect.transit.t_cognitect$transit34397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34399){
var self__ = this;
var _34399__$1 = this;
return self__.meta34398;
});

cognitect.transit.t_cognitect$transit34397.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34397.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34397.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34397.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta34398","meta34398",-2020438265,null)], null);
});

cognitect.transit.t_cognitect$transit34397.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit34397.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit34397";

cognitect.transit.t_cognitect$transit34397.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cognitect.transit/t_cognitect$transit34397");
});

cognitect.transit.__GT_t_cognitect$transit34397 = (function cognitect$transit$__GT_t_cognitect$transit34397(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34398){
return (new cognitect.transit.t_cognitect$transit34397(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34398));
});

}

return (new cognitect.transit.t_cognitect$transit34397(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__24760__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1481153822576