// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16852__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16852__auto__){
return or__16852__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16852__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25937_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25937_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25942 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25943 = null;
var count__25944 = (0);
var i__25945 = (0);
while(true){
if((i__25945 < count__25944)){
var n = cljs.core._nth.call(null,chunk__25943,i__25945);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25946 = seq__25942;
var G__25947 = chunk__25943;
var G__25948 = count__25944;
var G__25949 = (i__25945 + (1));
seq__25942 = G__25946;
chunk__25943 = G__25947;
count__25944 = G__25948;
i__25945 = G__25949;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25942);
if(temp__4425__auto__){
var seq__25942__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25942__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__25942__$1);
var G__25950 = cljs.core.chunk_rest.call(null,seq__25942__$1);
var G__25951 = c__17655__auto__;
var G__25952 = cljs.core.count.call(null,c__17655__auto__);
var G__25953 = (0);
seq__25942 = G__25950;
chunk__25943 = G__25951;
count__25944 = G__25952;
i__25945 = G__25953;
continue;
} else {
var n = cljs.core.first.call(null,seq__25942__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25954 = cljs.core.next.call(null,seq__25942__$1);
var G__25955 = null;
var G__25956 = (0);
var G__25957 = (0);
seq__25942 = G__25954;
chunk__25943 = G__25955;
count__25944 = G__25956;
i__25945 = G__25957;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25996_26003 = cljs.core.seq.call(null,deps);
var chunk__25997_26004 = null;
var count__25998_26005 = (0);
var i__25999_26006 = (0);
while(true){
if((i__25999_26006 < count__25998_26005)){
var dep_26007 = cljs.core._nth.call(null,chunk__25997_26004,i__25999_26006);
topo_sort_helper_STAR_.call(null,dep_26007,(depth + (1)),state);

var G__26008 = seq__25996_26003;
var G__26009 = chunk__25997_26004;
var G__26010 = count__25998_26005;
var G__26011 = (i__25999_26006 + (1));
seq__25996_26003 = G__26008;
chunk__25997_26004 = G__26009;
count__25998_26005 = G__26010;
i__25999_26006 = G__26011;
continue;
} else {
var temp__4425__auto___26012 = cljs.core.seq.call(null,seq__25996_26003);
if(temp__4425__auto___26012){
var seq__25996_26013__$1 = temp__4425__auto___26012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25996_26013__$1)){
var c__17655__auto___26014 = cljs.core.chunk_first.call(null,seq__25996_26013__$1);
var G__26015 = cljs.core.chunk_rest.call(null,seq__25996_26013__$1);
var G__26016 = c__17655__auto___26014;
var G__26017 = cljs.core.count.call(null,c__17655__auto___26014);
var G__26018 = (0);
seq__25996_26003 = G__26015;
chunk__25997_26004 = G__26016;
count__25998_26005 = G__26017;
i__25999_26006 = G__26018;
continue;
} else {
var dep_26019 = cljs.core.first.call(null,seq__25996_26013__$1);
topo_sort_helper_STAR_.call(null,dep_26019,(depth + (1)),state);

var G__26020 = cljs.core.next.call(null,seq__25996_26013__$1);
var G__26021 = null;
var G__26022 = (0);
var G__26023 = (0);
seq__25996_26003 = G__26020;
chunk__25997_26004 = G__26021;
count__25998_26005 = G__26022;
i__25999_26006 = G__26023;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26000){
var vec__26002 = p__26000;
var x = cljs.core.nth.call(null,vec__26002,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26002,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26002,x,xs,get_deps__$1){
return (function (p1__25958_SHARP_){
return clojure.set.difference.call(null,p1__25958_SHARP_,x);
});})(vec__26002,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26036 = cljs.core.seq.call(null,provides);
var chunk__26037 = null;
var count__26038 = (0);
var i__26039 = (0);
while(true){
if((i__26039 < count__26038)){
var prov = cljs.core._nth.call(null,chunk__26037,i__26039);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26040_26048 = cljs.core.seq.call(null,requires);
var chunk__26041_26049 = null;
var count__26042_26050 = (0);
var i__26043_26051 = (0);
while(true){
if((i__26043_26051 < count__26042_26050)){
var req_26052 = cljs.core._nth.call(null,chunk__26041_26049,i__26043_26051);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26052,prov);

var G__26053 = seq__26040_26048;
var G__26054 = chunk__26041_26049;
var G__26055 = count__26042_26050;
var G__26056 = (i__26043_26051 + (1));
seq__26040_26048 = G__26053;
chunk__26041_26049 = G__26054;
count__26042_26050 = G__26055;
i__26043_26051 = G__26056;
continue;
} else {
var temp__4425__auto___26057 = cljs.core.seq.call(null,seq__26040_26048);
if(temp__4425__auto___26057){
var seq__26040_26058__$1 = temp__4425__auto___26057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26040_26058__$1)){
var c__17655__auto___26059 = cljs.core.chunk_first.call(null,seq__26040_26058__$1);
var G__26060 = cljs.core.chunk_rest.call(null,seq__26040_26058__$1);
var G__26061 = c__17655__auto___26059;
var G__26062 = cljs.core.count.call(null,c__17655__auto___26059);
var G__26063 = (0);
seq__26040_26048 = G__26060;
chunk__26041_26049 = G__26061;
count__26042_26050 = G__26062;
i__26043_26051 = G__26063;
continue;
} else {
var req_26064 = cljs.core.first.call(null,seq__26040_26058__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26064,prov);

var G__26065 = cljs.core.next.call(null,seq__26040_26058__$1);
var G__26066 = null;
var G__26067 = (0);
var G__26068 = (0);
seq__26040_26048 = G__26065;
chunk__26041_26049 = G__26066;
count__26042_26050 = G__26067;
i__26043_26051 = G__26068;
continue;
}
} else {
}
}
break;
}

var G__26069 = seq__26036;
var G__26070 = chunk__26037;
var G__26071 = count__26038;
var G__26072 = (i__26039 + (1));
seq__26036 = G__26069;
chunk__26037 = G__26070;
count__26038 = G__26071;
i__26039 = G__26072;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26036);
if(temp__4425__auto__){
var seq__26036__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26036__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__26036__$1);
var G__26073 = cljs.core.chunk_rest.call(null,seq__26036__$1);
var G__26074 = c__17655__auto__;
var G__26075 = cljs.core.count.call(null,c__17655__auto__);
var G__26076 = (0);
seq__26036 = G__26073;
chunk__26037 = G__26074;
count__26038 = G__26075;
i__26039 = G__26076;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26036__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26044_26077 = cljs.core.seq.call(null,requires);
var chunk__26045_26078 = null;
var count__26046_26079 = (0);
var i__26047_26080 = (0);
while(true){
if((i__26047_26080 < count__26046_26079)){
var req_26081 = cljs.core._nth.call(null,chunk__26045_26078,i__26047_26080);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26081,prov);

var G__26082 = seq__26044_26077;
var G__26083 = chunk__26045_26078;
var G__26084 = count__26046_26079;
var G__26085 = (i__26047_26080 + (1));
seq__26044_26077 = G__26082;
chunk__26045_26078 = G__26083;
count__26046_26079 = G__26084;
i__26047_26080 = G__26085;
continue;
} else {
var temp__4425__auto___26086__$1 = cljs.core.seq.call(null,seq__26044_26077);
if(temp__4425__auto___26086__$1){
var seq__26044_26087__$1 = temp__4425__auto___26086__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26044_26087__$1)){
var c__17655__auto___26088 = cljs.core.chunk_first.call(null,seq__26044_26087__$1);
var G__26089 = cljs.core.chunk_rest.call(null,seq__26044_26087__$1);
var G__26090 = c__17655__auto___26088;
var G__26091 = cljs.core.count.call(null,c__17655__auto___26088);
var G__26092 = (0);
seq__26044_26077 = G__26089;
chunk__26045_26078 = G__26090;
count__26046_26079 = G__26091;
i__26047_26080 = G__26092;
continue;
} else {
var req_26093 = cljs.core.first.call(null,seq__26044_26087__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26093,prov);

var G__26094 = cljs.core.next.call(null,seq__26044_26087__$1);
var G__26095 = null;
var G__26096 = (0);
var G__26097 = (0);
seq__26044_26077 = G__26094;
chunk__26045_26078 = G__26095;
count__26046_26079 = G__26096;
i__26047_26080 = G__26097;
continue;
}
} else {
}
}
break;
}

var G__26098 = cljs.core.next.call(null,seq__26036__$1);
var G__26099 = null;
var G__26100 = (0);
var G__26101 = (0);
seq__26036 = G__26098;
chunk__26037 = G__26099;
count__26038 = G__26100;
i__26039 = G__26101;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26106_26110 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26107_26111 = null;
var count__26108_26112 = (0);
var i__26109_26113 = (0);
while(true){
if((i__26109_26113 < count__26108_26112)){
var ns_26114 = cljs.core._nth.call(null,chunk__26107_26111,i__26109_26113);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26114);

var G__26115 = seq__26106_26110;
var G__26116 = chunk__26107_26111;
var G__26117 = count__26108_26112;
var G__26118 = (i__26109_26113 + (1));
seq__26106_26110 = G__26115;
chunk__26107_26111 = G__26116;
count__26108_26112 = G__26117;
i__26109_26113 = G__26118;
continue;
} else {
var temp__4425__auto___26119 = cljs.core.seq.call(null,seq__26106_26110);
if(temp__4425__auto___26119){
var seq__26106_26120__$1 = temp__4425__auto___26119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26106_26120__$1)){
var c__17655__auto___26121 = cljs.core.chunk_first.call(null,seq__26106_26120__$1);
var G__26122 = cljs.core.chunk_rest.call(null,seq__26106_26120__$1);
var G__26123 = c__17655__auto___26121;
var G__26124 = cljs.core.count.call(null,c__17655__auto___26121);
var G__26125 = (0);
seq__26106_26110 = G__26122;
chunk__26107_26111 = G__26123;
count__26108_26112 = G__26124;
i__26109_26113 = G__26125;
continue;
} else {
var ns_26126 = cljs.core.first.call(null,seq__26106_26120__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26126);

var G__26127 = cljs.core.next.call(null,seq__26106_26120__$1);
var G__26128 = null;
var G__26129 = (0);
var G__26130 = (0);
seq__26106_26110 = G__26127;
chunk__26107_26111 = G__26128;
count__26108_26112 = G__26129;
i__26109_26113 = G__26130;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16852__auto__ = goog.require__;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26131__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26132__i = 0, G__26132__a = new Array(arguments.length -  0);
while (G__26132__i < G__26132__a.length) {G__26132__a[G__26132__i] = arguments[G__26132__i + 0]; ++G__26132__i;}
  args = new cljs.core.IndexedSeq(G__26132__a,0);
} 
return G__26131__delegate.call(this,args);};
G__26131.cljs$lang$maxFixedArity = 0;
G__26131.cljs$lang$applyTo = (function (arglist__26133){
var args = cljs.core.seq(arglist__26133);
return G__26131__delegate(args);
});
G__26131.cljs$core$IFn$_invoke$arity$variadic = G__26131__delegate;
return G__26131;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26135 = cljs.core._EQ_;
var expr__26136 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26135.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26136))){
var path_parts = ((function (pred__26135,expr__26136){
return (function (p1__26134_SHARP_){
return clojure.string.split.call(null,p1__26134_SHARP_,/[\/\\]/);
});})(pred__26135,expr__26136))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26135,expr__26136){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26138){if((e26138 instanceof Error)){
var e = e26138;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26138;

}
}})());
});
;})(path_parts,sep,root,pred__26135,expr__26136))
} else {
if(cljs.core.truth_(pred__26135.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26136))){
return ((function (pred__26135,expr__26136){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26135,expr__26136){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26135,expr__26136))
);

return deferred.addErrback(((function (deferred,pred__26135,expr__26136){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26135,expr__26136))
);
});
;})(pred__26135,expr__26136))
} else {
return ((function (pred__26135,expr__26136){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26135,expr__26136))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26139,callback){
var map__26142 = p__26139;
var map__26142__$1 = ((((!((map__26142 == null)))?((((map__26142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26142):map__26142);
var file_msg = map__26142__$1;
var request_url = cljs.core.get.call(null,map__26142__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26142,map__26142__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26142,map__26142__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__){
return (function (state_26166){
var state_val_26167 = (state_26166[(1)]);
if((state_val_26167 === (7))){
var inst_26162 = (state_26166[(2)]);
var state_26166__$1 = state_26166;
var statearr_26168_26188 = state_26166__$1;
(statearr_26168_26188[(2)] = inst_26162);

(statearr_26168_26188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (1))){
var state_26166__$1 = state_26166;
var statearr_26169_26189 = state_26166__$1;
(statearr_26169_26189[(2)] = null);

(statearr_26169_26189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (4))){
var inst_26146 = (state_26166[(7)]);
var inst_26146__$1 = (state_26166[(2)]);
var state_26166__$1 = (function (){var statearr_26170 = state_26166;
(statearr_26170[(7)] = inst_26146__$1);

return statearr_26170;
})();
if(cljs.core.truth_(inst_26146__$1)){
var statearr_26171_26190 = state_26166__$1;
(statearr_26171_26190[(1)] = (5));

} else {
var statearr_26172_26191 = state_26166__$1;
(statearr_26172_26191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (6))){
var state_26166__$1 = state_26166;
var statearr_26173_26192 = state_26166__$1;
(statearr_26173_26192[(2)] = null);

(statearr_26173_26192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (3))){
var inst_26164 = (state_26166[(2)]);
var state_26166__$1 = state_26166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26166__$1,inst_26164);
} else {
if((state_val_26167 === (2))){
var state_26166__$1 = state_26166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26166__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26167 === (11))){
var inst_26158 = (state_26166[(2)]);
var state_26166__$1 = (function (){var statearr_26174 = state_26166;
(statearr_26174[(8)] = inst_26158);

return statearr_26174;
})();
var statearr_26175_26193 = state_26166__$1;
(statearr_26175_26193[(2)] = null);

(statearr_26175_26193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (9))){
var inst_26150 = (state_26166[(9)]);
var inst_26152 = (state_26166[(10)]);
var inst_26154 = inst_26152.call(null,inst_26150);
var state_26166__$1 = state_26166;
var statearr_26176_26194 = state_26166__$1;
(statearr_26176_26194[(2)] = inst_26154);

(statearr_26176_26194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (5))){
var inst_26146 = (state_26166[(7)]);
var inst_26148 = figwheel.client.file_reloading.blocking_load.call(null,inst_26146);
var state_26166__$1 = state_26166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26166__$1,(8),inst_26148);
} else {
if((state_val_26167 === (10))){
var inst_26150 = (state_26166[(9)]);
var inst_26156 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26150);
var state_26166__$1 = state_26166;
var statearr_26177_26195 = state_26166__$1;
(statearr_26177_26195[(2)] = inst_26156);

(statearr_26177_26195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (8))){
var inst_26152 = (state_26166[(10)]);
var inst_26146 = (state_26166[(7)]);
var inst_26150 = (state_26166[(2)]);
var inst_26151 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26152__$1 = cljs.core.get.call(null,inst_26151,inst_26146);
var state_26166__$1 = (function (){var statearr_26178 = state_26166;
(statearr_26178[(9)] = inst_26150);

(statearr_26178[(10)] = inst_26152__$1);

return statearr_26178;
})();
if(cljs.core.truth_(inst_26152__$1)){
var statearr_26179_26196 = state_26166__$1;
(statearr_26179_26196[(1)] = (9));

} else {
var statearr_26180_26197 = state_26166__$1;
(statearr_26180_26197[(1)] = (10));

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
});})(c__20416__auto__))
;
return ((function (switch__20304__auto__,c__20416__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20305__auto__ = null;
var figwheel$client$file_reloading$state_machine__20305__auto____0 = (function (){
var statearr_26184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26184[(0)] = figwheel$client$file_reloading$state_machine__20305__auto__);

(statearr_26184[(1)] = (1));

return statearr_26184;
});
var figwheel$client$file_reloading$state_machine__20305__auto____1 = (function (state_26166){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_26166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e26185){if((e26185 instanceof Object)){
var ex__20308__auto__ = e26185;
var statearr_26186_26198 = state_26166;
(statearr_26186_26198[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26199 = state_26166;
state_26166 = G__26199;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20305__auto__ = function(state_26166){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20305__auto____1.call(this,state_26166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20305__auto____0;
figwheel$client$file_reloading$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20305__auto____1;
return figwheel$client$file_reloading$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__))
})();
var state__20418__auto__ = (function (){var statearr_26187 = f__20417__auto__.call(null);
(statearr_26187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_26187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__))
);

return c__20416__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26200,callback){
var map__26203 = p__26200;
var map__26203__$1 = ((((!((map__26203 == null)))?((((map__26203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26203):map__26203);
var file_msg = map__26203__$1;
var namespace = cljs.core.get.call(null,map__26203__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26203,map__26203__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26203,map__26203__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26205){
var map__26208 = p__26205;
var map__26208__$1 = ((((!((map__26208 == null)))?((((map__26208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26208):map__26208);
var file_msg = map__26208__$1;
var namespace = cljs.core.get.call(null,map__26208__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16840__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16840__auto__){
var or__16852__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
var or__16852__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto____$1)){
return or__16852__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16840__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26210,callback){
var map__26213 = p__26210;
var map__26213__$1 = ((((!((map__26213 == null)))?((((map__26213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26213):map__26213);
var file_msg = map__26213__$1;
var request_url = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20416__auto___26301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___26301,out){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___26301,out){
return (function (state_26283){
var state_val_26284 = (state_26283[(1)]);
if((state_val_26284 === (1))){
var inst_26261 = cljs.core.nth.call(null,files,(0),null);
var inst_26262 = cljs.core.nthnext.call(null,files,(1));
var inst_26263 = files;
var state_26283__$1 = (function (){var statearr_26285 = state_26283;
(statearr_26285[(7)] = inst_26262);

(statearr_26285[(8)] = inst_26261);

(statearr_26285[(9)] = inst_26263);

return statearr_26285;
})();
var statearr_26286_26302 = state_26283__$1;
(statearr_26286_26302[(2)] = null);

(statearr_26286_26302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (2))){
var inst_26266 = (state_26283[(10)]);
var inst_26263 = (state_26283[(9)]);
var inst_26266__$1 = cljs.core.nth.call(null,inst_26263,(0),null);
var inst_26267 = cljs.core.nthnext.call(null,inst_26263,(1));
var inst_26268 = (inst_26266__$1 == null);
var inst_26269 = cljs.core.not.call(null,inst_26268);
var state_26283__$1 = (function (){var statearr_26287 = state_26283;
(statearr_26287[(10)] = inst_26266__$1);

(statearr_26287[(11)] = inst_26267);

return statearr_26287;
})();
if(inst_26269){
var statearr_26288_26303 = state_26283__$1;
(statearr_26288_26303[(1)] = (4));

} else {
var statearr_26289_26304 = state_26283__$1;
(statearr_26289_26304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (3))){
var inst_26281 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26283__$1,inst_26281);
} else {
if((state_val_26284 === (4))){
var inst_26266 = (state_26283[(10)]);
var inst_26271 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26266);
var state_26283__$1 = state_26283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26283__$1,(7),inst_26271);
} else {
if((state_val_26284 === (5))){
var inst_26277 = cljs.core.async.close_BANG_.call(null,out);
var state_26283__$1 = state_26283;
var statearr_26290_26305 = state_26283__$1;
(statearr_26290_26305[(2)] = inst_26277);

(statearr_26290_26305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (6))){
var inst_26279 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
var statearr_26291_26306 = state_26283__$1;
(statearr_26291_26306[(2)] = inst_26279);

(statearr_26291_26306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (7))){
var inst_26267 = (state_26283[(11)]);
var inst_26273 = (state_26283[(2)]);
var inst_26274 = cljs.core.async.put_BANG_.call(null,out,inst_26273);
var inst_26263 = inst_26267;
var state_26283__$1 = (function (){var statearr_26292 = state_26283;
(statearr_26292[(9)] = inst_26263);

(statearr_26292[(12)] = inst_26274);

return statearr_26292;
})();
var statearr_26293_26307 = state_26283__$1;
(statearr_26293_26307[(2)] = null);

(statearr_26293_26307[(1)] = (2));


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
});})(c__20416__auto___26301,out))
;
return ((function (switch__20304__auto__,c__20416__auto___26301,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto____0 = (function (){
var statearr_26297 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26297[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto__);

(statearr_26297[(1)] = (1));

return statearr_26297;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto____1 = (function (state_26283){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_26283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e26298){if((e26298 instanceof Object)){
var ex__20308__auto__ = e26298;
var statearr_26299_26308 = state_26283;
(statearr_26299_26308[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26309 = state_26283;
state_26283 = G__26309;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto__ = function(state_26283){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto____1.call(this,state_26283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___26301,out))
})();
var state__20418__auto__ = (function (){var statearr_26300 = f__20417__auto__.call(null);
(statearr_26300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___26301);

return statearr_26300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___26301,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26310,opts){
var map__26314 = p__26310;
var map__26314__$1 = ((((!((map__26314 == null)))?((((map__26314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26314):map__26314);
var eval_body__$1 = cljs.core.get.call(null,map__26314__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16840__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16840__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16840__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26316){var e = e26316;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26317_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26317_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26322){
var vec__26323 = p__26322;
var k = cljs.core.nth.call(null,vec__26323,(0),null);
var v = cljs.core.nth.call(null,vec__26323,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26324){
var vec__26325 = p__26324;
var k = cljs.core.nth.call(null,vec__26325,(0),null);
var v = cljs.core.nth.call(null,vec__26325,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26329,p__26330){
var map__26577 = p__26329;
var map__26577__$1 = ((((!((map__26577 == null)))?((((map__26577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26577):map__26577);
var opts = map__26577__$1;
var before_jsload = cljs.core.get.call(null,map__26577__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26577__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26577__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26578 = p__26330;
var map__26578__$1 = ((((!((map__26578 == null)))?((((map__26578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26578):map__26578);
var msg = map__26578__$1;
var files = cljs.core.get.call(null,map__26578__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26578__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26578__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26731){
var state_val_26732 = (state_26731[(1)]);
if((state_val_26732 === (7))){
var inst_26593 = (state_26731[(7)]);
var inst_26592 = (state_26731[(8)]);
var inst_26595 = (state_26731[(9)]);
var inst_26594 = (state_26731[(10)]);
var inst_26600 = cljs.core._nth.call(null,inst_26593,inst_26595);
var inst_26601 = figwheel.client.file_reloading.eval_body.call(null,inst_26600,opts);
var inst_26602 = (inst_26595 + (1));
var tmp26733 = inst_26593;
var tmp26734 = inst_26592;
var tmp26735 = inst_26594;
var inst_26592__$1 = tmp26734;
var inst_26593__$1 = tmp26733;
var inst_26594__$1 = tmp26735;
var inst_26595__$1 = inst_26602;
var state_26731__$1 = (function (){var statearr_26736 = state_26731;
(statearr_26736[(7)] = inst_26593__$1);

(statearr_26736[(8)] = inst_26592__$1);

(statearr_26736[(9)] = inst_26595__$1);

(statearr_26736[(10)] = inst_26594__$1);

(statearr_26736[(11)] = inst_26601);

return statearr_26736;
})();
var statearr_26737_26823 = state_26731__$1;
(statearr_26737_26823[(2)] = null);

(statearr_26737_26823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (20))){
var inst_26635 = (state_26731[(12)]);
var inst_26643 = figwheel.client.file_reloading.sort_files.call(null,inst_26635);
var state_26731__$1 = state_26731;
var statearr_26738_26824 = state_26731__$1;
(statearr_26738_26824[(2)] = inst_26643);

(statearr_26738_26824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (27))){
var state_26731__$1 = state_26731;
var statearr_26739_26825 = state_26731__$1;
(statearr_26739_26825[(2)] = null);

(statearr_26739_26825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (1))){
var inst_26584 = (state_26731[(13)]);
var inst_26581 = before_jsload.call(null,files);
var inst_26582 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26583 = (function (){return ((function (inst_26584,inst_26581,inst_26582,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26326_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26326_SHARP_);
});
;})(inst_26584,inst_26581,inst_26582,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26584__$1 = cljs.core.filter.call(null,inst_26583,files);
var inst_26585 = cljs.core.not_empty.call(null,inst_26584__$1);
var state_26731__$1 = (function (){var statearr_26740 = state_26731;
(statearr_26740[(13)] = inst_26584__$1);

(statearr_26740[(14)] = inst_26581);

(statearr_26740[(15)] = inst_26582);

return statearr_26740;
})();
if(cljs.core.truth_(inst_26585)){
var statearr_26741_26826 = state_26731__$1;
(statearr_26741_26826[(1)] = (2));

} else {
var statearr_26742_26827 = state_26731__$1;
(statearr_26742_26827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (24))){
var state_26731__$1 = state_26731;
var statearr_26743_26828 = state_26731__$1;
(statearr_26743_26828[(2)] = null);

(statearr_26743_26828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (39))){
var inst_26685 = (state_26731[(16)]);
var state_26731__$1 = state_26731;
var statearr_26744_26829 = state_26731__$1;
(statearr_26744_26829[(2)] = inst_26685);

(statearr_26744_26829[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (46))){
var inst_26726 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26745_26830 = state_26731__$1;
(statearr_26745_26830[(2)] = inst_26726);

(statearr_26745_26830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (4))){
var inst_26629 = (state_26731[(2)]);
var inst_26630 = cljs.core.List.EMPTY;
var inst_26631 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26630);
var inst_26632 = (function (){return ((function (inst_26629,inst_26630,inst_26631,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26327_SHARP_){
var and__16840__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26327_SHARP_);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26327_SHARP_));
} else {
return and__16840__auto__;
}
});
;})(inst_26629,inst_26630,inst_26631,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26633 = cljs.core.filter.call(null,inst_26632,files);
var inst_26634 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26635 = cljs.core.concat.call(null,inst_26633,inst_26634);
var state_26731__$1 = (function (){var statearr_26746 = state_26731;
(statearr_26746[(17)] = inst_26629);

(statearr_26746[(12)] = inst_26635);

(statearr_26746[(18)] = inst_26631);

return statearr_26746;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26747_26831 = state_26731__$1;
(statearr_26747_26831[(1)] = (16));

} else {
var statearr_26748_26832 = state_26731__$1;
(statearr_26748_26832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (15))){
var inst_26619 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26749_26833 = state_26731__$1;
(statearr_26749_26833[(2)] = inst_26619);

(statearr_26749_26833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (21))){
var inst_26645 = (state_26731[(19)]);
var inst_26645__$1 = (state_26731[(2)]);
var inst_26646 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26645__$1);
var state_26731__$1 = (function (){var statearr_26750 = state_26731;
(statearr_26750[(19)] = inst_26645__$1);

return statearr_26750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26731__$1,(22),inst_26646);
} else {
if((state_val_26732 === (31))){
var inst_26729 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26731__$1,inst_26729);
} else {
if((state_val_26732 === (32))){
var inst_26685 = (state_26731[(16)]);
var inst_26690 = inst_26685.cljs$lang$protocol_mask$partition0$;
var inst_26691 = (inst_26690 & (64));
var inst_26692 = inst_26685.cljs$core$ISeq$;
var inst_26693 = (inst_26691) || (inst_26692);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26693)){
var statearr_26751_26834 = state_26731__$1;
(statearr_26751_26834[(1)] = (35));

} else {
var statearr_26752_26835 = state_26731__$1;
(statearr_26752_26835[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (40))){
var inst_26706 = (state_26731[(20)]);
var inst_26705 = (state_26731[(2)]);
var inst_26706__$1 = cljs.core.get.call(null,inst_26705,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26707 = cljs.core.get.call(null,inst_26705,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26708 = cljs.core.not_empty.call(null,inst_26706__$1);
var state_26731__$1 = (function (){var statearr_26753 = state_26731;
(statearr_26753[(21)] = inst_26707);

(statearr_26753[(20)] = inst_26706__$1);

return statearr_26753;
})();
if(cljs.core.truth_(inst_26708)){
var statearr_26754_26836 = state_26731__$1;
(statearr_26754_26836[(1)] = (41));

} else {
var statearr_26755_26837 = state_26731__$1;
(statearr_26755_26837[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (33))){
var state_26731__$1 = state_26731;
var statearr_26756_26838 = state_26731__$1;
(statearr_26756_26838[(2)] = false);

(statearr_26756_26838[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (13))){
var inst_26605 = (state_26731[(22)]);
var inst_26609 = cljs.core.chunk_first.call(null,inst_26605);
var inst_26610 = cljs.core.chunk_rest.call(null,inst_26605);
var inst_26611 = cljs.core.count.call(null,inst_26609);
var inst_26592 = inst_26610;
var inst_26593 = inst_26609;
var inst_26594 = inst_26611;
var inst_26595 = (0);
var state_26731__$1 = (function (){var statearr_26757 = state_26731;
(statearr_26757[(7)] = inst_26593);

(statearr_26757[(8)] = inst_26592);

(statearr_26757[(9)] = inst_26595);

(statearr_26757[(10)] = inst_26594);

return statearr_26757;
})();
var statearr_26758_26839 = state_26731__$1;
(statearr_26758_26839[(2)] = null);

(statearr_26758_26839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (22))){
var inst_26648 = (state_26731[(23)]);
var inst_26653 = (state_26731[(24)]);
var inst_26645 = (state_26731[(19)]);
var inst_26649 = (state_26731[(25)]);
var inst_26648__$1 = (state_26731[(2)]);
var inst_26649__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26648__$1);
var inst_26650 = (function (){var all_files = inst_26645;
var res_SINGLEQUOTE_ = inst_26648__$1;
var res = inst_26649__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26648,inst_26653,inst_26645,inst_26649,inst_26648__$1,inst_26649__$1,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26328_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26328_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26648,inst_26653,inst_26645,inst_26649,inst_26648__$1,inst_26649__$1,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26651 = cljs.core.filter.call(null,inst_26650,inst_26648__$1);
var inst_26652 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26653__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26652);
var inst_26654 = cljs.core.not_empty.call(null,inst_26653__$1);
var state_26731__$1 = (function (){var statearr_26759 = state_26731;
(statearr_26759[(26)] = inst_26651);

(statearr_26759[(23)] = inst_26648__$1);

(statearr_26759[(24)] = inst_26653__$1);

(statearr_26759[(25)] = inst_26649__$1);

return statearr_26759;
})();
if(cljs.core.truth_(inst_26654)){
var statearr_26760_26840 = state_26731__$1;
(statearr_26760_26840[(1)] = (23));

} else {
var statearr_26761_26841 = state_26731__$1;
(statearr_26761_26841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (36))){
var state_26731__$1 = state_26731;
var statearr_26762_26842 = state_26731__$1;
(statearr_26762_26842[(2)] = false);

(statearr_26762_26842[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (41))){
var inst_26706 = (state_26731[(20)]);
var inst_26710 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26711 = cljs.core.map.call(null,inst_26710,inst_26706);
var inst_26712 = cljs.core.pr_str.call(null,inst_26711);
var inst_26713 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26712)].join('');
var inst_26714 = figwheel.client.utils.log.call(null,inst_26713);
var state_26731__$1 = state_26731;
var statearr_26763_26843 = state_26731__$1;
(statearr_26763_26843[(2)] = inst_26714);

(statearr_26763_26843[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (43))){
var inst_26707 = (state_26731[(21)]);
var inst_26717 = (state_26731[(2)]);
var inst_26718 = cljs.core.not_empty.call(null,inst_26707);
var state_26731__$1 = (function (){var statearr_26764 = state_26731;
(statearr_26764[(27)] = inst_26717);

return statearr_26764;
})();
if(cljs.core.truth_(inst_26718)){
var statearr_26765_26844 = state_26731__$1;
(statearr_26765_26844[(1)] = (44));

} else {
var statearr_26766_26845 = state_26731__$1;
(statearr_26766_26845[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (29))){
var inst_26651 = (state_26731[(26)]);
var inst_26648 = (state_26731[(23)]);
var inst_26653 = (state_26731[(24)]);
var inst_26685 = (state_26731[(16)]);
var inst_26645 = (state_26731[(19)]);
var inst_26649 = (state_26731[(25)]);
var inst_26681 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26684 = (function (){var all_files = inst_26645;
var res_SINGLEQUOTE_ = inst_26648;
var res = inst_26649;
var files_not_loaded = inst_26651;
var dependencies_that_loaded = inst_26653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26685,inst_26645,inst_26649,inst_26681,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26683){
var map__26767 = p__26683;
var map__26767__$1 = ((((!((map__26767 == null)))?((((map__26767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26767):map__26767);
var namespace = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26685,inst_26645,inst_26649,inst_26681,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26685__$1 = cljs.core.group_by.call(null,inst_26684,inst_26651);
var inst_26687 = (inst_26685__$1 == null);
var inst_26688 = cljs.core.not.call(null,inst_26687);
var state_26731__$1 = (function (){var statearr_26769 = state_26731;
(statearr_26769[(28)] = inst_26681);

(statearr_26769[(16)] = inst_26685__$1);

return statearr_26769;
})();
if(inst_26688){
var statearr_26770_26846 = state_26731__$1;
(statearr_26770_26846[(1)] = (32));

} else {
var statearr_26771_26847 = state_26731__$1;
(statearr_26771_26847[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (44))){
var inst_26707 = (state_26731[(21)]);
var inst_26720 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26707);
var inst_26721 = cljs.core.pr_str.call(null,inst_26720);
var inst_26722 = [cljs.core.str("not required: "),cljs.core.str(inst_26721)].join('');
var inst_26723 = figwheel.client.utils.log.call(null,inst_26722);
var state_26731__$1 = state_26731;
var statearr_26772_26848 = state_26731__$1;
(statearr_26772_26848[(2)] = inst_26723);

(statearr_26772_26848[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (6))){
var inst_26626 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26773_26849 = state_26731__$1;
(statearr_26773_26849[(2)] = inst_26626);

(statearr_26773_26849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (28))){
var inst_26651 = (state_26731[(26)]);
var inst_26678 = (state_26731[(2)]);
var inst_26679 = cljs.core.not_empty.call(null,inst_26651);
var state_26731__$1 = (function (){var statearr_26774 = state_26731;
(statearr_26774[(29)] = inst_26678);

return statearr_26774;
})();
if(cljs.core.truth_(inst_26679)){
var statearr_26775_26850 = state_26731__$1;
(statearr_26775_26850[(1)] = (29));

} else {
var statearr_26776_26851 = state_26731__$1;
(statearr_26776_26851[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (25))){
var inst_26649 = (state_26731[(25)]);
var inst_26665 = (state_26731[(2)]);
var inst_26666 = cljs.core.not_empty.call(null,inst_26649);
var state_26731__$1 = (function (){var statearr_26777 = state_26731;
(statearr_26777[(30)] = inst_26665);

return statearr_26777;
})();
if(cljs.core.truth_(inst_26666)){
var statearr_26778_26852 = state_26731__$1;
(statearr_26778_26852[(1)] = (26));

} else {
var statearr_26779_26853 = state_26731__$1;
(statearr_26779_26853[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (34))){
var inst_26700 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26700)){
var statearr_26780_26854 = state_26731__$1;
(statearr_26780_26854[(1)] = (38));

} else {
var statearr_26781_26855 = state_26731__$1;
(statearr_26781_26855[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (17))){
var state_26731__$1 = state_26731;
var statearr_26782_26856 = state_26731__$1;
(statearr_26782_26856[(2)] = recompile_dependents);

(statearr_26782_26856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (3))){
var state_26731__$1 = state_26731;
var statearr_26783_26857 = state_26731__$1;
(statearr_26783_26857[(2)] = null);

(statearr_26783_26857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (12))){
var inst_26622 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26784_26858 = state_26731__$1;
(statearr_26784_26858[(2)] = inst_26622);

(statearr_26784_26858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (2))){
var inst_26584 = (state_26731[(13)]);
var inst_26591 = cljs.core.seq.call(null,inst_26584);
var inst_26592 = inst_26591;
var inst_26593 = null;
var inst_26594 = (0);
var inst_26595 = (0);
var state_26731__$1 = (function (){var statearr_26785 = state_26731;
(statearr_26785[(7)] = inst_26593);

(statearr_26785[(8)] = inst_26592);

(statearr_26785[(9)] = inst_26595);

(statearr_26785[(10)] = inst_26594);

return statearr_26785;
})();
var statearr_26786_26859 = state_26731__$1;
(statearr_26786_26859[(2)] = null);

(statearr_26786_26859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (23))){
var inst_26651 = (state_26731[(26)]);
var inst_26648 = (state_26731[(23)]);
var inst_26653 = (state_26731[(24)]);
var inst_26645 = (state_26731[(19)]);
var inst_26649 = (state_26731[(25)]);
var inst_26656 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26658 = (function (){var all_files = inst_26645;
var res_SINGLEQUOTE_ = inst_26648;
var res = inst_26649;
var files_not_loaded = inst_26651;
var dependencies_that_loaded = inst_26653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26645,inst_26649,inst_26656,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26657){
var map__26787 = p__26657;
var map__26787__$1 = ((((!((map__26787 == null)))?((((map__26787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26787):map__26787);
var request_url = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26645,inst_26649,inst_26656,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26659 = cljs.core.reverse.call(null,inst_26653);
var inst_26660 = cljs.core.map.call(null,inst_26658,inst_26659);
var inst_26661 = cljs.core.pr_str.call(null,inst_26660);
var inst_26662 = figwheel.client.utils.log.call(null,inst_26661);
var state_26731__$1 = (function (){var statearr_26789 = state_26731;
(statearr_26789[(31)] = inst_26656);

return statearr_26789;
})();
var statearr_26790_26860 = state_26731__$1;
(statearr_26790_26860[(2)] = inst_26662);

(statearr_26790_26860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (35))){
var state_26731__$1 = state_26731;
var statearr_26791_26861 = state_26731__$1;
(statearr_26791_26861[(2)] = true);

(statearr_26791_26861[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (19))){
var inst_26635 = (state_26731[(12)]);
var inst_26641 = figwheel.client.file_reloading.expand_files.call(null,inst_26635);
var state_26731__$1 = state_26731;
var statearr_26792_26862 = state_26731__$1;
(statearr_26792_26862[(2)] = inst_26641);

(statearr_26792_26862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (11))){
var state_26731__$1 = state_26731;
var statearr_26793_26863 = state_26731__$1;
(statearr_26793_26863[(2)] = null);

(statearr_26793_26863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (9))){
var inst_26624 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26794_26864 = state_26731__$1;
(statearr_26794_26864[(2)] = inst_26624);

(statearr_26794_26864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (5))){
var inst_26595 = (state_26731[(9)]);
var inst_26594 = (state_26731[(10)]);
var inst_26597 = (inst_26595 < inst_26594);
var inst_26598 = inst_26597;
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26598)){
var statearr_26795_26865 = state_26731__$1;
(statearr_26795_26865[(1)] = (7));

} else {
var statearr_26796_26866 = state_26731__$1;
(statearr_26796_26866[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (14))){
var inst_26605 = (state_26731[(22)]);
var inst_26614 = cljs.core.first.call(null,inst_26605);
var inst_26615 = figwheel.client.file_reloading.eval_body.call(null,inst_26614,opts);
var inst_26616 = cljs.core.next.call(null,inst_26605);
var inst_26592 = inst_26616;
var inst_26593 = null;
var inst_26594 = (0);
var inst_26595 = (0);
var state_26731__$1 = (function (){var statearr_26797 = state_26731;
(statearr_26797[(7)] = inst_26593);

(statearr_26797[(8)] = inst_26592);

(statearr_26797[(9)] = inst_26595);

(statearr_26797[(10)] = inst_26594);

(statearr_26797[(32)] = inst_26615);

return statearr_26797;
})();
var statearr_26798_26867 = state_26731__$1;
(statearr_26798_26867[(2)] = null);

(statearr_26798_26867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (45))){
var state_26731__$1 = state_26731;
var statearr_26799_26868 = state_26731__$1;
(statearr_26799_26868[(2)] = null);

(statearr_26799_26868[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (26))){
var inst_26651 = (state_26731[(26)]);
var inst_26648 = (state_26731[(23)]);
var inst_26653 = (state_26731[(24)]);
var inst_26645 = (state_26731[(19)]);
var inst_26649 = (state_26731[(25)]);
var inst_26668 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26670 = (function (){var all_files = inst_26645;
var res_SINGLEQUOTE_ = inst_26648;
var res = inst_26649;
var files_not_loaded = inst_26651;
var dependencies_that_loaded = inst_26653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26645,inst_26649,inst_26668,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26669){
var map__26800 = p__26669;
var map__26800__$1 = ((((!((map__26800 == null)))?((((map__26800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26800):map__26800);
var namespace = cljs.core.get.call(null,map__26800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26645,inst_26649,inst_26668,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26671 = cljs.core.map.call(null,inst_26670,inst_26649);
var inst_26672 = cljs.core.pr_str.call(null,inst_26671);
var inst_26673 = figwheel.client.utils.log.call(null,inst_26672);
var inst_26674 = (function (){var all_files = inst_26645;
var res_SINGLEQUOTE_ = inst_26648;
var res = inst_26649;
var files_not_loaded = inst_26651;
var dependencies_that_loaded = inst_26653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26645,inst_26649,inst_26668,inst_26670,inst_26671,inst_26672,inst_26673,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26651,inst_26648,inst_26653,inst_26645,inst_26649,inst_26668,inst_26670,inst_26671,inst_26672,inst_26673,state_val_26732,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26675 = setTimeout(inst_26674,(10));
var state_26731__$1 = (function (){var statearr_26802 = state_26731;
(statearr_26802[(33)] = inst_26668);

(statearr_26802[(34)] = inst_26673);

return statearr_26802;
})();
var statearr_26803_26869 = state_26731__$1;
(statearr_26803_26869[(2)] = inst_26675);

(statearr_26803_26869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (16))){
var state_26731__$1 = state_26731;
var statearr_26804_26870 = state_26731__$1;
(statearr_26804_26870[(2)] = reload_dependents);

(statearr_26804_26870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (38))){
var inst_26685 = (state_26731[(16)]);
var inst_26702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26685);
var state_26731__$1 = state_26731;
var statearr_26805_26871 = state_26731__$1;
(statearr_26805_26871[(2)] = inst_26702);

(statearr_26805_26871[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (30))){
var state_26731__$1 = state_26731;
var statearr_26806_26872 = state_26731__$1;
(statearr_26806_26872[(2)] = null);

(statearr_26806_26872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (10))){
var inst_26605 = (state_26731[(22)]);
var inst_26607 = cljs.core.chunked_seq_QMARK_.call(null,inst_26605);
var state_26731__$1 = state_26731;
if(inst_26607){
var statearr_26807_26873 = state_26731__$1;
(statearr_26807_26873[(1)] = (13));

} else {
var statearr_26808_26874 = state_26731__$1;
(statearr_26808_26874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (18))){
var inst_26639 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26639)){
var statearr_26809_26875 = state_26731__$1;
(statearr_26809_26875[(1)] = (19));

} else {
var statearr_26810_26876 = state_26731__$1;
(statearr_26810_26876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (42))){
var state_26731__$1 = state_26731;
var statearr_26811_26877 = state_26731__$1;
(statearr_26811_26877[(2)] = null);

(statearr_26811_26877[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (37))){
var inst_26697 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26812_26878 = state_26731__$1;
(statearr_26812_26878[(2)] = inst_26697);

(statearr_26812_26878[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (8))){
var inst_26592 = (state_26731[(8)]);
var inst_26605 = (state_26731[(22)]);
var inst_26605__$1 = cljs.core.seq.call(null,inst_26592);
var state_26731__$1 = (function (){var statearr_26813 = state_26731;
(statearr_26813[(22)] = inst_26605__$1);

return statearr_26813;
})();
if(inst_26605__$1){
var statearr_26814_26879 = state_26731__$1;
(statearr_26814_26879[(1)] = (10));

} else {
var statearr_26815_26880 = state_26731__$1;
(statearr_26815_26880[(1)] = (11));

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
}
});})(c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20304__auto__,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto____0 = (function (){
var statearr_26819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26819[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto__);

(statearr_26819[(1)] = (1));

return statearr_26819;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto____1 = (function (state_26731){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_26731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e26820){if((e26820 instanceof Object)){
var ex__20308__auto__ = e26820;
var statearr_26821_26881 = state_26731;
(statearr_26821_26881[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26882 = state_26731;
state_26731 = G__26882;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto__ = function(state_26731){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto____1.call(this,state_26731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20418__auto__ = (function (){var statearr_26822 = f__20417__auto__.call(null);
(statearr_26822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_26822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__,map__26577,map__26577__$1,opts,before_jsload,on_jsload,reload_dependents,map__26578,map__26578__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20416__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26885,link){
var map__26888 = p__26885;
var map__26888__$1 = ((((!((map__26888 == null)))?((((map__26888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26888):map__26888);
var file = cljs.core.get.call(null,map__26888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26888,map__26888__$1,file){
return (function (p1__26883_SHARP_,p2__26884_SHARP_){
if(cljs.core._EQ_.call(null,p1__26883_SHARP_,p2__26884_SHARP_)){
return p1__26883_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26888,map__26888__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26894){
var map__26895 = p__26894;
var map__26895__$1 = ((((!((map__26895 == null)))?((((map__26895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895):map__26895);
var match_length = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26890_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26890_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26897 = [];
var len__17910__auto___26900 = arguments.length;
var i__17911__auto___26901 = (0);
while(true){
if((i__17911__auto___26901 < len__17910__auto___26900)){
args26897.push((arguments[i__17911__auto___26901]));

var G__26902 = (i__17911__auto___26901 + (1));
i__17911__auto___26901 = G__26902;
continue;
} else {
}
break;
}

var G__26899 = args26897.length;
switch (G__26899) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26897.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26904_SHARP_,p2__26905_SHARP_){
return cljs.core.assoc.call(null,p1__26904_SHARP_,cljs.core.get.call(null,p2__26905_SHARP_,key),p2__26905_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26906){
var map__26909 = p__26906;
var map__26909__$1 = ((((!((map__26909 == null)))?((((map__26909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26909):map__26909);
var f_data = map__26909__$1;
var file = cljs.core.get.call(null,map__26909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26911,files_msg){
var map__26918 = p__26911;
var map__26918__$1 = ((((!((map__26918 == null)))?((((map__26918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26918):map__26918);
var opts = map__26918__$1;
var on_cssload = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26920_26924 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26921_26925 = null;
var count__26922_26926 = (0);
var i__26923_26927 = (0);
while(true){
if((i__26923_26927 < count__26922_26926)){
var f_26928 = cljs.core._nth.call(null,chunk__26921_26925,i__26923_26927);
figwheel.client.file_reloading.reload_css_file.call(null,f_26928);

var G__26929 = seq__26920_26924;
var G__26930 = chunk__26921_26925;
var G__26931 = count__26922_26926;
var G__26932 = (i__26923_26927 + (1));
seq__26920_26924 = G__26929;
chunk__26921_26925 = G__26930;
count__26922_26926 = G__26931;
i__26923_26927 = G__26932;
continue;
} else {
var temp__4425__auto___26933 = cljs.core.seq.call(null,seq__26920_26924);
if(temp__4425__auto___26933){
var seq__26920_26934__$1 = temp__4425__auto___26933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26920_26934__$1)){
var c__17655__auto___26935 = cljs.core.chunk_first.call(null,seq__26920_26934__$1);
var G__26936 = cljs.core.chunk_rest.call(null,seq__26920_26934__$1);
var G__26937 = c__17655__auto___26935;
var G__26938 = cljs.core.count.call(null,c__17655__auto___26935);
var G__26939 = (0);
seq__26920_26924 = G__26936;
chunk__26921_26925 = G__26937;
count__26922_26926 = G__26938;
i__26923_26927 = G__26939;
continue;
} else {
var f_26940 = cljs.core.first.call(null,seq__26920_26934__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26940);

var G__26941 = cljs.core.next.call(null,seq__26920_26934__$1);
var G__26942 = null;
var G__26943 = (0);
var G__26944 = (0);
seq__26920_26924 = G__26941;
chunk__26921_26925 = G__26942;
count__26922_26926 = G__26943;
i__26923_26927 = G__26944;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26918,map__26918__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26918,map__26918__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453415057116