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
var seq__28207_28211 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__28208_28212 = null;
var count__28209_28213 = (0);
var i__28210_28214 = (0);
while(true){
if((i__28210_28214 < count__28209_28213)){
var k_28215 = cljs.core._nth.call(null,chunk__28208_28212,i__28210_28214);
var v_28216 = (b[k_28215]);
(a[k_28215] = v_28216);

var G__28217 = seq__28207_28211;
var G__28218 = chunk__28208_28212;
var G__28219 = count__28209_28213;
var G__28220 = (i__28210_28214 + (1));
seq__28207_28211 = G__28217;
chunk__28208_28212 = G__28218;
count__28209_28213 = G__28219;
i__28210_28214 = G__28220;
continue;
} else {
var temp__4657__auto___28221 = cljs.core.seq.call(null,seq__28207_28211);
if(temp__4657__auto___28221){
var seq__28207_28222__$1 = temp__4657__auto___28221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28207_28222__$1)){
var c__19527__auto___28223 = cljs.core.chunk_first.call(null,seq__28207_28222__$1);
var G__28224 = cljs.core.chunk_rest.call(null,seq__28207_28222__$1);
var G__28225 = c__19527__auto___28223;
var G__28226 = cljs.core.count.call(null,c__19527__auto___28223);
var G__28227 = (0);
seq__28207_28211 = G__28224;
chunk__28208_28212 = G__28225;
count__28209_28213 = G__28226;
i__28210_28214 = G__28227;
continue;
} else {
var k_28228 = cljs.core.first.call(null,seq__28207_28222__$1);
var v_28229 = (b[k_28228]);
(a[k_28228] = v_28229);

var G__28230 = cljs.core.next.call(null,seq__28207_28222__$1);
var G__28231 = null;
var G__28232 = (0);
var G__28233 = (0);
seq__28207_28211 = G__28230;
chunk__28208_28212 = G__28231;
count__28209_28213 = G__28232;
i__28210_28214 = G__28233;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/VectorBuilder");
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
var args28234 = [];
var len__19791__auto___28237 = arguments.length;
var i__19792__auto___28238 = (0);
while(true){
if((i__19792__auto___28238 < len__19791__auto___28237)){
args28234.push((arguments[i__19792__auto___28238]));

var G__28239 = (i__19792__auto___28238 + (1));
i__19792__auto___28238 = G__28239;
continue;
} else {
}
break;
}

var G__28236 = args28234.length;
switch (G__28236) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28234.length)].join('')));

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
var G__28241 = (i + (2));
var G__28242 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28241;
ret = G__28242;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/SymbolHandler");
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
var seq__28243_28247 = cljs.core.seq.call(null,v);
var chunk__28244_28248 = null;
var count__28245_28249 = (0);
var i__28246_28250 = (0);
while(true){
if((i__28246_28250 < count__28245_28249)){
var x_28251 = cljs.core._nth.call(null,chunk__28244_28248,i__28246_28250);
ret.push(x_28251);

var G__28252 = seq__28243_28247;
var G__28253 = chunk__28244_28248;
var G__28254 = count__28245_28249;
var G__28255 = (i__28246_28250 + (1));
seq__28243_28247 = G__28252;
chunk__28244_28248 = G__28253;
count__28245_28249 = G__28254;
i__28246_28250 = G__28255;
continue;
} else {
var temp__4657__auto___28256 = cljs.core.seq.call(null,seq__28243_28247);
if(temp__4657__auto___28256){
var seq__28243_28257__$1 = temp__4657__auto___28256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28243_28257__$1)){
var c__19527__auto___28258 = cljs.core.chunk_first.call(null,seq__28243_28257__$1);
var G__28259 = cljs.core.chunk_rest.call(null,seq__28243_28257__$1);
var G__28260 = c__19527__auto___28258;
var G__28261 = cljs.core.count.call(null,c__19527__auto___28258);
var G__28262 = (0);
seq__28243_28247 = G__28259;
chunk__28244_28248 = G__28260;
count__28245_28249 = G__28261;
i__28246_28250 = G__28262;
continue;
} else {
var x_28263 = cljs.core.first.call(null,seq__28243_28257__$1);
ret.push(x_28263);

var G__28264 = cljs.core.next.call(null,seq__28243_28257__$1);
var G__28265 = null;
var G__28266 = (0);
var G__28267 = (0);
seq__28243_28247 = G__28264;
chunk__28244_28248 = G__28265;
count__28245_28249 = G__28266;
i__28246_28250 = G__28267;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/MapHandler");
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
var seq__28268_28272 = cljs.core.seq.call(null,v);
var chunk__28269_28273 = null;
var count__28270_28274 = (0);
var i__28271_28275 = (0);
while(true){
if((i__28271_28275 < count__28270_28274)){
var x_28276 = cljs.core._nth.call(null,chunk__28269_28273,i__28271_28275);
ret.push(x_28276);

var G__28277 = seq__28268_28272;
var G__28278 = chunk__28269_28273;
var G__28279 = count__28270_28274;
var G__28280 = (i__28271_28275 + (1));
seq__28268_28272 = G__28277;
chunk__28269_28273 = G__28278;
count__28270_28274 = G__28279;
i__28271_28275 = G__28280;
continue;
} else {
var temp__4657__auto___28281 = cljs.core.seq.call(null,seq__28268_28272);
if(temp__4657__auto___28281){
var seq__28268_28282__$1 = temp__4657__auto___28281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28268_28282__$1)){
var c__19527__auto___28283 = cljs.core.chunk_first.call(null,seq__28268_28282__$1);
var G__28284 = cljs.core.chunk_rest.call(null,seq__28268_28282__$1);
var G__28285 = c__19527__auto___28283;
var G__28286 = cljs.core.count.call(null,c__19527__auto___28283);
var G__28287 = (0);
seq__28268_28272 = G__28284;
chunk__28269_28273 = G__28285;
count__28270_28274 = G__28286;
i__28271_28275 = G__28287;
continue;
} else {
var x_28288 = cljs.core.first.call(null,seq__28268_28282__$1);
ret.push(x_28288);

var G__28289 = cljs.core.next.call(null,seq__28268_28282__$1);
var G__28290 = null;
var G__28291 = (0);
var G__28292 = (0);
seq__28268_28272 = G__28289;
chunk__28269_28273 = G__28290;
count__28270_28274 = G__28291;
i__28271_28275 = G__28292;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/SetHandler");
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
var seq__28293_28297 = cljs.core.seq.call(null,v);
var chunk__28294_28298 = null;
var count__28295_28299 = (0);
var i__28296_28300 = (0);
while(true){
if((i__28296_28300 < count__28295_28299)){
var x_28301 = cljs.core._nth.call(null,chunk__28294_28298,i__28296_28300);
ret.push(x_28301);

var G__28302 = seq__28293_28297;
var G__28303 = chunk__28294_28298;
var G__28304 = count__28295_28299;
var G__28305 = (i__28296_28300 + (1));
seq__28293_28297 = G__28302;
chunk__28294_28298 = G__28303;
count__28295_28299 = G__28304;
i__28296_28300 = G__28305;
continue;
} else {
var temp__4657__auto___28306 = cljs.core.seq.call(null,seq__28293_28297);
if(temp__4657__auto___28306){
var seq__28293_28307__$1 = temp__4657__auto___28306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28293_28307__$1)){
var c__19527__auto___28308 = cljs.core.chunk_first.call(null,seq__28293_28307__$1);
var G__28309 = cljs.core.chunk_rest.call(null,seq__28293_28307__$1);
var G__28310 = c__19527__auto___28308;
var G__28311 = cljs.core.count.call(null,c__19527__auto___28308);
var G__28312 = (0);
seq__28293_28297 = G__28309;
chunk__28294_28298 = G__28310;
count__28295_28299 = G__28311;
i__28296_28300 = G__28312;
continue;
} else {
var x_28313 = cljs.core.first.call(null,seq__28293_28307__$1);
ret.push(x_28313);

var G__28314 = cljs.core.next.call(null,seq__28293_28307__$1);
var G__28315 = null;
var G__28316 = (0);
var G__28317 = (0);
seq__28293_28297 = G__28314;
chunk__28294_28298 = G__28315;
count__28295_28299 = G__28316;
i__28296_28300 = G__28317;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/UUIDHandler");
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
var args28318 = [];
var len__19791__auto___28333 = arguments.length;
var i__19792__auto___28334 = (0);
while(true){
if((i__19792__auto___28334 < len__19791__auto___28333)){
args28318.push((arguments[i__19792__auto___28334]));

var G__28335 = (i__19792__auto___28334 + (1));
i__19792__auto___28334 = G__28335;
continue;
} else {
}
break;
}

var G__28320 = args28318.length;
switch (G__28320) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28318.length)].join('')));

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
var G__28321 = obj;
G__28321.push(kfn.call(null,k),vfn.call(null,v));

return G__28321;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x28322 = cljs.core.clone.call(null,handlers);
x28322.forEach = ((function (x28322,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__28323 = cljs.core.seq.call(null,coll);
var chunk__28324 = null;
var count__28325 = (0);
var i__28326 = (0);
while(true){
if((i__28326 < count__28325)){
var vec__28327 = cljs.core._nth.call(null,chunk__28324,i__28326);
var k = cljs.core.nth.call(null,vec__28327,(0),null);
var v = cljs.core.nth.call(null,vec__28327,(1),null);
f.call(null,v,k);

var G__28337 = seq__28323;
var G__28338 = chunk__28324;
var G__28339 = count__28325;
var G__28340 = (i__28326 + (1));
seq__28323 = G__28337;
chunk__28324 = G__28338;
count__28325 = G__28339;
i__28326 = G__28340;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28323);
if(temp__4657__auto__){
var seq__28323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28323__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__28323__$1);
var G__28341 = cljs.core.chunk_rest.call(null,seq__28323__$1);
var G__28342 = c__19527__auto__;
var G__28343 = cljs.core.count.call(null,c__19527__auto__);
var G__28344 = (0);
seq__28323 = G__28341;
chunk__28324 = G__28342;
count__28325 = G__28343;
i__28326 = G__28344;
continue;
} else {
var vec__28330 = cljs.core.first.call(null,seq__28323__$1);
var k = cljs.core.nth.call(null,vec__28330,(0),null);
var v = cljs.core.nth.call(null,vec__28330,(1),null);
f.call(null,v,k);

var G__28345 = cljs.core.next.call(null,seq__28323__$1);
var G__28346 = null;
var G__28347 = (0);
var G__28348 = (0);
seq__28323 = G__28345;
chunk__28324 = G__28346;
count__28325 = G__28347;
i__28326 = G__28348;
continue;
}
} else {
return null;
}
}
break;
}
});})(x28322,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x28322;
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
var args28349 = [];
var len__19791__auto___28355 = arguments.length;
var i__19792__auto___28356 = (0);
while(true){
if((i__19792__auto___28356 < len__19791__auto___28355)){
args28349.push((arguments[i__19792__auto___28356]));

var G__28357 = (i__19792__auto___28356 + (1));
i__19792__auto___28356 = G__28357;
continue;
} else {
}
break;
}

var G__28351 = args28349.length;
switch (G__28351) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28349.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit28352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit28352 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta28353){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta28353 = meta28353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit28352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28354,meta28353__$1){
var self__ = this;
var _28354__$1 = this;
return (new cognitect.transit.t_cognitect$transit28352(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta28353__$1));
});

cognitect.transit.t_cognitect$transit28352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28354){
var self__ = this;
var _28354__$1 = this;
return self__.meta28353;
});

cognitect.transit.t_cognitect$transit28352.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28352.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28352.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28352.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta28353","meta28353",147438854,null)], null);
});

cognitect.transit.t_cognitect$transit28352.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit28352.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit28352";

cognitect.transit.t_cognitect$transit28352.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cognitect.transit/t_cognitect$transit28352");
});

cognitect.transit.__GT_t_cognitect$transit28352 = (function cognitect$transit$__GT_t_cognitect$transit28352(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28353){
return (new cognitect.transit.t_cognitect$transit28352(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28353));
});

}

return (new cognitect.transit.t_cognitect$transit28352(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__18716__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1474300066385