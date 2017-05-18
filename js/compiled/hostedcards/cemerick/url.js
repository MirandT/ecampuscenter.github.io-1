// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__26924 = string;
var G__26924__$1 = (((G__26924 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26924)].join(''));
var G__26924__$2 = (((G__26924__$1 == null))?null:encodeURIComponent(G__26924__$1));
if((G__26924__$2 == null)){
return null;
} else {
return G__26924__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__26926 = string;
var G__26926__$1 = (((G__26926 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26926)].join(''));
if((G__26926__$1 == null)){
return null;
} else {
return decodeURIComponent(G__26926__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__26932 = cljs.core.seq(m);
var G__26932__$1 = (((G__26932 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__26932));
var G__26932__$2 = (((G__26932__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26932,G__26932__$1){
return (function (p__26933){
var vec__26934 = p__26933;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26934,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''))], null);
});})(G__26932,G__26932__$1))
,G__26932__$1));
var G__26932__$3 = (((G__26932__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__26932__$2));
var G__26932__$4 = (((G__26932__$3 == null))?null:cljs.core.flatten(G__26932__$3));
if((G__26932__$4 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__26932__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_(qstr))){
var G__26938 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__26938__$1 = (((G__26938 == null))?null:cljs.core.seq(G__26938));
var G__26938__$2 = (((G__26938__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.array_seq([G__26938__$1], 0)));
var G__26938__$3 = (((G__26938__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__26938__$2));
if((G__26938__$3 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__26938__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https"))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('');
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cemerick.url.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds(self__.username,self__.password);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(creds),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(creds)?"@":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemerick.url.port_str(self__.protocol,self__.port)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(self__.query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(self__.anchor)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10101__auto__,k__10102__auto__){
var self__ = this;
var this__10101__auto____$1 = this;
return this__10101__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10102__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10103__auto__,k26940,else__10104__auto__){
var self__ = this;
var this__10103__auto____$1 = this;
var G__26942 = k26940;
var G__26942__$1 = (((G__26942 instanceof cljs.core.Keyword))?G__26942.fqn:null);
switch (G__26942__$1) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26940,else__10104__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10115__auto__,writer__10116__auto__,opts__10117__auto__){
var self__ = this;
var this__10115__auto____$1 = this;
var pr_pair__10118__auto__ = ((function (this__10115__auto____$1){
return (function (keyval__10119__auto__){
return cljs.core.pr_sequential_writer(writer__10116__auto__,cljs.core.pr_writer,""," ","",opts__10117__auto__,keyval__10119__auto__);
});})(this__10115__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10116__auto__,pr_pair__10118__auto__,"#cemerick.url.URL{",", ","}",opts__10117__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$username,self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$anchor,self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26939){
var self__ = this;
var G__26939__$1 = this;
return (new cljs.core.RecordIter((0),G__26939__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol,cljs.core.cst$kw$username,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$anchor], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10099__auto__){
var self__ = this;
var this__10099__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10095__auto__){
var self__ = this;
var this__10095__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10105__auto__){
var self__ = this;
var this__10105__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10096__auto__){
var self__ = this;
var this__10096__auto____$1 = this;
var h__9868__auto__ = self__.__hash;
if(!((h__9868__auto__ == null))){
return h__9868__auto__;
} else {
var h__9868__auto____$1 = cljs.core.hash_imap(this__10096__auto____$1);
self__.__hash = h__9868__auto____$1;

return h__9868__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10097__auto__,other__10098__auto__){
var self__ = this;
var this__10097__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9414__auto__ = other__10098__auto__;
if(cljs.core.truth_(and__9414__auto__)){
return ((this__10097__auto____$1.constructor === other__10098__auto__.constructor)) && (cljs.core.equiv_map(this__10097__auto____$1,other__10098__auto__));
} else {
return and__9414__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10110__auto__,k__10111__auto__){
var self__ = this;
var this__10110__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$protocol,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$username,null,cljs.core.cst$kw$port,null,cljs.core.cst$kw$host,null,cljs.core.cst$kw$anchor,null,cljs.core.cst$kw$query,null], null), null),k__10111__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10110__auto____$1),self__.__meta),k__10111__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10111__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10108__auto__,k__10109__auto__,G__26939){
var self__ = this;
var this__10108__auto____$1 = this;
var pred__26943 = cljs.core.keyword_identical_QMARK_;
var expr__26944 = k__10109__auto__;
if(cljs.core.truth_((function (){var G__26946 = cljs.core.cst$kw$protocol;
var G__26947 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26946,G__26947) : pred__26943.call(null,G__26946,G__26947));
})())){
return (new cemerick.url.URL(G__26939,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26948 = cljs.core.cst$kw$username;
var G__26949 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26948,G__26949) : pred__26943.call(null,G__26948,G__26949));
})())){
return (new cemerick.url.URL(self__.protocol,G__26939,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26950 = cljs.core.cst$kw$password;
var G__26951 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26950,G__26951) : pred__26943.call(null,G__26950,G__26951));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,G__26939,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26952 = cljs.core.cst$kw$host;
var G__26953 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26952,G__26953) : pred__26943.call(null,G__26952,G__26953));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__26939,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26954 = cljs.core.cst$kw$port;
var G__26955 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26954,G__26955) : pred__26943.call(null,G__26954,G__26955));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__26939,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26956 = cljs.core.cst$kw$path;
var G__26957 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26956,G__26957) : pred__26943.call(null,G__26956,G__26957));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__26939,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26958 = cljs.core.cst$kw$query;
var G__26959 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26958,G__26959) : pred__26943.call(null,G__26958,G__26959));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__26939,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26960 = cljs.core.cst$kw$anchor;
var G__26961 = expr__26944;
return (pred__26943.cljs$core$IFn$_invoke$arity$2 ? pred__26943.cljs$core$IFn$_invoke$arity$2(G__26960,G__26961) : pred__26943.call(null,G__26960,G__26961));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__26939,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10109__auto__,G__26939),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10113__auto__){
var self__ = this;
var this__10113__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$username,self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$anchor,self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10100__auto__,G__26939){
var self__ = this;
var this__10100__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__26939,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10106__auto__,entry__10107__auto__){
var self__ = this;
var this__10106__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10107__auto__)){
return this__10106__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10107__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10106__auto____$1,entry__10107__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$protocol,cljs.core.cst$sym$username,cljs.core.cst$sym$password,cljs.core.cst$sym$host,cljs.core.cst$sym$port,cljs.core.cst$sym$path,cljs.core.cst$sym$query,cljs.core.cst$sym$anchor], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__10137__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__10137__auto__,writer__10138__auto__){
return cljs.core._write(writer__10138__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__26941){
return (new cemerick.url.URL(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(G__26941),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(G__26941),cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(G__26941),cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(G__26941),cljs.core.cst$kw$port.cljs$core$IFn$_invoke$arity$1(G__26941),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__26941),cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(G__26941),cljs.core.cst$kw$anchor.cljs$core$IFn$_invoke$arity$1(G__26941),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26941,cljs.core.cst$kw$protocol,cljs.core.array_seq([cljs.core.cst$kw$username,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$anchor], 0)),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__26966 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__9426__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__9414__auto__ = cljs.core.seq(user);
if(and__9414__auto__){
return user;
} else {
return and__9414__auto__;
}
})(),(function (){var and__9414__auto__ = cljs.core.seq(pass);
if(and__9414__auto__){
return pass;
} else {
return and__9414__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default(url__$1.getPort(),null,(-1)),pathetic.core.normalize(url__$1.getPath()),cemerick.url.query__GT_map(cemerick.url.translate_default(url__$1.getQuery(),"",null)),cemerick.url.translate_default(url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var args26969 = [];
var len__10647__auto___26974 = arguments.length;
var i__10648__auto___26975 = (0);
while(true){
if((i__10648__auto___26975 < len__10647__auto___26974)){
args26969.push((arguments[i__10648__auto___26975]));

var G__26976 = (i__10648__auto___26975 + (1));
i__10648__auto___26975 = G__26976;
continue;
} else {
}
break;
}

var G__26973 = args26969.length;
switch (G__26973) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__10670__auto__ = (new cljs.core.IndexedSeq(args26969.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10670__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_(url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.cljs$core$IFn$_invoke$arity$1(base_url));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,cljs.core.cst$kw$path,pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

cemerick.url.url.cljs$lang$applyTo = (function (seq26970){
var G__26971 = cljs.core.first(seq26970);
var seq26970__$1 = cljs.core.next(seq26970);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__26971,seq26970__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);

