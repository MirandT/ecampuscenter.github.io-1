// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__22896 = string;
var G__22896__$1 = (((G__22896 == null))?null:[cljs.core.str(G__22896)].join(''));
var G__22896__$2 = (((G__22896__$1 == null))?null:encodeURIComponent(G__22896__$1));
if((G__22896__$2 == null)){
return null;
} else {
return G__22896__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__22898 = string;
var G__22898__$1 = (((G__22898 == null))?null:[cljs.core.str(G__22898)].join(''));
if((G__22898__$1 == null)){
return null;
} else {
return decodeURIComponent(G__22898__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__22904 = cljs.core.seq(m);
var G__22904__$1 = (((G__22904 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__22904));
var G__22904__$2 = (((G__22904__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__22904,G__22904__$1){
return (function (p__22905){
var vec__22906 = p__22905;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22906,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22906,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode([cljs.core.str(v)].join(''))], null);
});})(G__22904,G__22904__$1))
,G__22904__$1));
var G__22904__$3 = (((G__22904__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__22904__$2));
var G__22904__$4 = (((G__22904__$3 == null))?null:cljs.core.flatten(G__22904__$3));
if((G__22904__$4 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__22904__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_(qstr))){
var G__22910 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__22910__$1 = (((G__22910 == null))?null:cljs.core.seq(G__22910));
var G__22910__$2 = (((G__22910__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.array_seq([G__22910__$1], 0)));
var G__22910__$3 = (((G__22910__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__22910__$2));
if((G__22910__$3 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__22910__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
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
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str(self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq(self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7028__auto__,k__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7028__auto____$1,k__7029__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7030__auto__,k22912,else__7031__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
var G__22914 = (((k22912 instanceof cljs.core.Keyword))?k22912.fqn:null);
switch (G__22914) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22912,else__7031__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7042__auto__,writer__7043__auto__,opts__7044__auto__){
var self__ = this;
var this__7042__auto____$1 = this;
var pr_pair__7045__auto__ = ((function (this__7042__auto____$1){
return (function (keyval__7046__auto__){
return cljs.core.pr_sequential_writer(writer__7043__auto__,cljs.core.pr_writer,""," ","",opts__7044__auto__,keyval__7046__auto__);
});})(this__7042__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7043__auto__,pr_pair__7045__auto__,"#cemerick.url.URL{",", ","}",opts__7044__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$username,self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$anchor,self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IIterable$ = true;

cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22911){
var self__ = this;
var G__22911__$1 = this;
return (new cljs.core.RecordIter((0),G__22911__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol,cljs.core.cst$kw$username,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$anchor], null),cljs.core._iterator(self__.__extmap)));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7022__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7032__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7023__auto__){
var self__ = this;
var this__7023__auto____$1 = this;
var h__6841__auto__ = self__.__hash;
if(!((h__6841__auto__ == null))){
return h__6841__auto__;
} else {
var h__6841__auto____$1 = cljs.core.hash_imap(this__7023__auto____$1);
self__.__hash = h__6841__auto____$1;

return h__6841__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7024__auto__,other__7025__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6394__auto__ = other__7025__auto__;
if(cljs.core.truth_(and__6394__auto__)){
var and__6394__auto____$1 = (this__7024__auto____$1.constructor === other__7025__auto__.constructor);
if(and__6394__auto____$1){
return cljs.core.equiv_map(this__7024__auto____$1,other__7025__auto__);
} else {
return and__6394__auto____$1;
}
} else {
return and__6394__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7037__auto__,k__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$protocol,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$username,null,cljs.core.cst$kw$port,null,cljs.core.cst$kw$host,null,cljs.core.cst$kw$anchor,null,cljs.core.cst$kw$query,null], null), null),k__7038__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7037__auto____$1),self__.__meta),k__7038__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7038__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7035__auto__,k__7036__auto__,G__22911){
var self__ = this;
var this__7035__auto____$1 = this;
var pred__22915 = cljs.core.keyword_identical_QMARK_;
var expr__22916 = k__7036__auto__;
if(cljs.core.truth_((function (){var G__22918 = cljs.core.cst$kw$protocol;
var G__22919 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22918,G__22919) : pred__22915.call(null,G__22918,G__22919));
})())){
return (new cemerick.url.URL(G__22911,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22920 = cljs.core.cst$kw$username;
var G__22921 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22920,G__22921) : pred__22915.call(null,G__22920,G__22921));
})())){
return (new cemerick.url.URL(self__.protocol,G__22911,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22922 = cljs.core.cst$kw$password;
var G__22923 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22922,G__22923) : pred__22915.call(null,G__22922,G__22923));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,G__22911,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22924 = cljs.core.cst$kw$host;
var G__22925 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22924,G__22925) : pred__22915.call(null,G__22924,G__22925));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__22911,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22926 = cljs.core.cst$kw$port;
var G__22927 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22926,G__22927) : pred__22915.call(null,G__22926,G__22927));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__22911,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22928 = cljs.core.cst$kw$path;
var G__22929 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22928,G__22929) : pred__22915.call(null,G__22928,G__22929));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__22911,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22930 = cljs.core.cst$kw$query;
var G__22931 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22930,G__22931) : pred__22915.call(null,G__22930,G__22931));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__22911,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22932 = cljs.core.cst$kw$anchor;
var G__22933 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22932,G__22933) : pred__22915.call(null,G__22932,G__22933));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__22911,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7036__auto__,G__22911),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$username,self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$anchor,self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7027__auto__,G__22911){
var self__ = this;
var this__7027__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__22911,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7033__auto__,entry__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7034__auto__)){
return cljs.core._assoc(this__7033__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7034__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7033__auto____$1,entry__7034__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$protocol,cljs.core.cst$sym$username,cljs.core.cst$sym$password,cljs.core.cst$sym$host,cljs.core.cst$sym$port,cljs.core.cst$sym$path,cljs.core.cst$sym$query,cljs.core.cst$sym$anchor], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__7062__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__7062__auto__,writer__7063__auto__){
return cljs.core._write(writer__7063__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__22913){
return (new cemerick.url.URL(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(G__22913),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(G__22913),cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(G__22913),cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(G__22913),cljs.core.cst$kw$port.cljs$core$IFn$_invoke$arity$1(G__22913),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__22913),cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(G__22913),cljs.core.cst$kw$anchor.cljs$core$IFn$_invoke$arity$1(G__22913),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22913,cljs.core.cst$kw$protocol,cljs.core.array_seq([cljs.core.cst$kw$username,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$anchor], 0)),null));
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
var vec__22938 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__6406__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__6394__auto__ = cljs.core.seq(user);
if(and__6394__auto__){
return user;
} else {
return and__6394__auto__;
}
})(),(function (){var and__6394__auto__ = cljs.core.seq(pass);
if(and__6394__auto__){
return pass;
} else {
return and__6394__auto__;
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
var args22941 = [];
var len__7481__auto___22946 = arguments.length;
var i__7482__auto___22947 = (0);
while(true){
if((i__7482__auto___22947 < len__7481__auto___22946)){
args22941.push((arguments[i__7482__auto___22947]));

var G__22948 = (i__7482__auto___22947 + (1));
i__7482__auto___22947 = G__22948;
continue;
} else {
}
break;
}

var G__22945 = args22941.length;
switch (G__22945) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7500__auto__ = (new cljs.core.IndexedSeq(args22941.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);

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

cemerick.url.url.cljs$lang$applyTo = (function (seq22942){
var G__22943 = cljs.core.first(seq22942);
var seq22942__$1 = cljs.core.next(seq22942);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__22943,seq22942__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);

