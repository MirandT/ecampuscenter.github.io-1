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
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
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
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25259_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25259_SHARP_));
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
var seq__25264 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25265 = null;
var count__25266 = (0);
var i__25267 = (0);
while(true){
if((i__25267 < count__25266)){
var n = cljs.core._nth.call(null,chunk__25265,i__25267);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25268 = seq__25264;
var G__25269 = chunk__25265;
var G__25270 = count__25266;
var G__25271 = (i__25267 + (1));
seq__25264 = G__25268;
chunk__25265 = G__25269;
count__25266 = G__25270;
i__25267 = G__25271;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25264);
if(temp__4425__auto__){
var seq__25264__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25264__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25264__$1);
var G__25272 = cljs.core.chunk_rest.call(null,seq__25264__$1);
var G__25273 = c__17629__auto__;
var G__25274 = cljs.core.count.call(null,c__17629__auto__);
var G__25275 = (0);
seq__25264 = G__25272;
chunk__25265 = G__25273;
count__25266 = G__25274;
i__25267 = G__25275;
continue;
} else {
var n = cljs.core.first.call(null,seq__25264__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25276 = cljs.core.next.call(null,seq__25264__$1);
var G__25277 = null;
var G__25278 = (0);
var G__25279 = (0);
seq__25264 = G__25276;
chunk__25265 = G__25277;
count__25266 = G__25278;
i__25267 = G__25279;
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

var seq__25318_25325 = cljs.core.seq.call(null,deps);
var chunk__25319_25326 = null;
var count__25320_25327 = (0);
var i__25321_25328 = (0);
while(true){
if((i__25321_25328 < count__25320_25327)){
var dep_25329 = cljs.core._nth.call(null,chunk__25319_25326,i__25321_25328);
topo_sort_helper_STAR_.call(null,dep_25329,(depth + (1)),state);

var G__25330 = seq__25318_25325;
var G__25331 = chunk__25319_25326;
var G__25332 = count__25320_25327;
var G__25333 = (i__25321_25328 + (1));
seq__25318_25325 = G__25330;
chunk__25319_25326 = G__25331;
count__25320_25327 = G__25332;
i__25321_25328 = G__25333;
continue;
} else {
var temp__4425__auto___25334 = cljs.core.seq.call(null,seq__25318_25325);
if(temp__4425__auto___25334){
var seq__25318_25335__$1 = temp__4425__auto___25334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25318_25335__$1)){
var c__17629__auto___25336 = cljs.core.chunk_first.call(null,seq__25318_25335__$1);
var G__25337 = cljs.core.chunk_rest.call(null,seq__25318_25335__$1);
var G__25338 = c__17629__auto___25336;
var G__25339 = cljs.core.count.call(null,c__17629__auto___25336);
var G__25340 = (0);
seq__25318_25325 = G__25337;
chunk__25319_25326 = G__25338;
count__25320_25327 = G__25339;
i__25321_25328 = G__25340;
continue;
} else {
var dep_25341 = cljs.core.first.call(null,seq__25318_25335__$1);
topo_sort_helper_STAR_.call(null,dep_25341,(depth + (1)),state);

var G__25342 = cljs.core.next.call(null,seq__25318_25335__$1);
var G__25343 = null;
var G__25344 = (0);
var G__25345 = (0);
seq__25318_25325 = G__25342;
chunk__25319_25326 = G__25343;
count__25320_25327 = G__25344;
i__25321_25328 = G__25345;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25322){
var vec__25324 = p__25322;
var x = cljs.core.nth.call(null,vec__25324,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25324,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25324,x,xs,get_deps__$1){
return (function (p1__25280_SHARP_){
return clojure.set.difference.call(null,p1__25280_SHARP_,x);
});})(vec__25324,x,xs,get_deps__$1))
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
var seq__25358 = cljs.core.seq.call(null,provides);
var chunk__25359 = null;
var count__25360 = (0);
var i__25361 = (0);
while(true){
if((i__25361 < count__25360)){
var prov = cljs.core._nth.call(null,chunk__25359,i__25361);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25362_25370 = cljs.core.seq.call(null,requires);
var chunk__25363_25371 = null;
var count__25364_25372 = (0);
var i__25365_25373 = (0);
while(true){
if((i__25365_25373 < count__25364_25372)){
var req_25374 = cljs.core._nth.call(null,chunk__25363_25371,i__25365_25373);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25374,prov);

var G__25375 = seq__25362_25370;
var G__25376 = chunk__25363_25371;
var G__25377 = count__25364_25372;
var G__25378 = (i__25365_25373 + (1));
seq__25362_25370 = G__25375;
chunk__25363_25371 = G__25376;
count__25364_25372 = G__25377;
i__25365_25373 = G__25378;
continue;
} else {
var temp__4425__auto___25379 = cljs.core.seq.call(null,seq__25362_25370);
if(temp__4425__auto___25379){
var seq__25362_25380__$1 = temp__4425__auto___25379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25362_25380__$1)){
var c__17629__auto___25381 = cljs.core.chunk_first.call(null,seq__25362_25380__$1);
var G__25382 = cljs.core.chunk_rest.call(null,seq__25362_25380__$1);
var G__25383 = c__17629__auto___25381;
var G__25384 = cljs.core.count.call(null,c__17629__auto___25381);
var G__25385 = (0);
seq__25362_25370 = G__25382;
chunk__25363_25371 = G__25383;
count__25364_25372 = G__25384;
i__25365_25373 = G__25385;
continue;
} else {
var req_25386 = cljs.core.first.call(null,seq__25362_25380__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25386,prov);

var G__25387 = cljs.core.next.call(null,seq__25362_25380__$1);
var G__25388 = null;
var G__25389 = (0);
var G__25390 = (0);
seq__25362_25370 = G__25387;
chunk__25363_25371 = G__25388;
count__25364_25372 = G__25389;
i__25365_25373 = G__25390;
continue;
}
} else {
}
}
break;
}

var G__25391 = seq__25358;
var G__25392 = chunk__25359;
var G__25393 = count__25360;
var G__25394 = (i__25361 + (1));
seq__25358 = G__25391;
chunk__25359 = G__25392;
count__25360 = G__25393;
i__25361 = G__25394;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25358);
if(temp__4425__auto__){
var seq__25358__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25358__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25358__$1);
var G__25395 = cljs.core.chunk_rest.call(null,seq__25358__$1);
var G__25396 = c__17629__auto__;
var G__25397 = cljs.core.count.call(null,c__17629__auto__);
var G__25398 = (0);
seq__25358 = G__25395;
chunk__25359 = G__25396;
count__25360 = G__25397;
i__25361 = G__25398;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25358__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25366_25399 = cljs.core.seq.call(null,requires);
var chunk__25367_25400 = null;
var count__25368_25401 = (0);
var i__25369_25402 = (0);
while(true){
if((i__25369_25402 < count__25368_25401)){
var req_25403 = cljs.core._nth.call(null,chunk__25367_25400,i__25369_25402);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25403,prov);

var G__25404 = seq__25366_25399;
var G__25405 = chunk__25367_25400;
var G__25406 = count__25368_25401;
var G__25407 = (i__25369_25402 + (1));
seq__25366_25399 = G__25404;
chunk__25367_25400 = G__25405;
count__25368_25401 = G__25406;
i__25369_25402 = G__25407;
continue;
} else {
var temp__4425__auto___25408__$1 = cljs.core.seq.call(null,seq__25366_25399);
if(temp__4425__auto___25408__$1){
var seq__25366_25409__$1 = temp__4425__auto___25408__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25366_25409__$1)){
var c__17629__auto___25410 = cljs.core.chunk_first.call(null,seq__25366_25409__$1);
var G__25411 = cljs.core.chunk_rest.call(null,seq__25366_25409__$1);
var G__25412 = c__17629__auto___25410;
var G__25413 = cljs.core.count.call(null,c__17629__auto___25410);
var G__25414 = (0);
seq__25366_25399 = G__25411;
chunk__25367_25400 = G__25412;
count__25368_25401 = G__25413;
i__25369_25402 = G__25414;
continue;
} else {
var req_25415 = cljs.core.first.call(null,seq__25366_25409__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25415,prov);

var G__25416 = cljs.core.next.call(null,seq__25366_25409__$1);
var G__25417 = null;
var G__25418 = (0);
var G__25419 = (0);
seq__25366_25399 = G__25416;
chunk__25367_25400 = G__25417;
count__25368_25401 = G__25418;
i__25369_25402 = G__25419;
continue;
}
} else {
}
}
break;
}

var G__25420 = cljs.core.next.call(null,seq__25358__$1);
var G__25421 = null;
var G__25422 = (0);
var G__25423 = (0);
seq__25358 = G__25420;
chunk__25359 = G__25421;
count__25360 = G__25422;
i__25361 = G__25423;
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
var seq__25428_25432 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25429_25433 = null;
var count__25430_25434 = (0);
var i__25431_25435 = (0);
while(true){
if((i__25431_25435 < count__25430_25434)){
var ns_25436 = cljs.core._nth.call(null,chunk__25429_25433,i__25431_25435);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25436);

var G__25437 = seq__25428_25432;
var G__25438 = chunk__25429_25433;
var G__25439 = count__25430_25434;
var G__25440 = (i__25431_25435 + (1));
seq__25428_25432 = G__25437;
chunk__25429_25433 = G__25438;
count__25430_25434 = G__25439;
i__25431_25435 = G__25440;
continue;
} else {
var temp__4425__auto___25441 = cljs.core.seq.call(null,seq__25428_25432);
if(temp__4425__auto___25441){
var seq__25428_25442__$1 = temp__4425__auto___25441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25428_25442__$1)){
var c__17629__auto___25443 = cljs.core.chunk_first.call(null,seq__25428_25442__$1);
var G__25444 = cljs.core.chunk_rest.call(null,seq__25428_25442__$1);
var G__25445 = c__17629__auto___25443;
var G__25446 = cljs.core.count.call(null,c__17629__auto___25443);
var G__25447 = (0);
seq__25428_25432 = G__25444;
chunk__25429_25433 = G__25445;
count__25430_25434 = G__25446;
i__25431_25435 = G__25447;
continue;
} else {
var ns_25448 = cljs.core.first.call(null,seq__25428_25442__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25448);

var G__25449 = cljs.core.next.call(null,seq__25428_25442__$1);
var G__25450 = null;
var G__25451 = (0);
var G__25452 = (0);
seq__25428_25432 = G__25449;
chunk__25429_25433 = G__25450;
count__25430_25434 = G__25451;
i__25431_25435 = G__25452;
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
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
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
var G__25453__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25454__i = 0, G__25454__a = new Array(arguments.length -  0);
while (G__25454__i < G__25454__a.length) {G__25454__a[G__25454__i] = arguments[G__25454__i + 0]; ++G__25454__i;}
  args = new cljs.core.IndexedSeq(G__25454__a,0);
} 
return G__25453__delegate.call(this,args);};
G__25453.cljs$lang$maxFixedArity = 0;
G__25453.cljs$lang$applyTo = (function (arglist__25455){
var args = cljs.core.seq(arglist__25455);
return G__25453__delegate(args);
});
G__25453.cljs$core$IFn$_invoke$arity$variadic = G__25453__delegate;
return G__25453;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25457 = cljs.core._EQ_;
var expr__25458 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25457.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25458))){
var path_parts = ((function (pred__25457,expr__25458){
return (function (p1__25456_SHARP_){
return clojure.string.split.call(null,p1__25456_SHARP_,/[\/\\]/);
});})(pred__25457,expr__25458))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25457,expr__25458){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25460){if((e25460 instanceof Error)){
var e = e25460;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25460;

}
}})());
});
;})(path_parts,sep,root,pred__25457,expr__25458))
} else {
if(cljs.core.truth_(pred__25457.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25458))){
return ((function (pred__25457,expr__25458){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25457,expr__25458){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25457,expr__25458))
);

return deferred.addErrback(((function (deferred,pred__25457,expr__25458){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25457,expr__25458))
);
});
;})(pred__25457,expr__25458))
} else {
return ((function (pred__25457,expr__25458){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25457,expr__25458))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25461,callback){
var map__25464 = p__25461;
var map__25464__$1 = ((((!((map__25464 == null)))?((((map__25464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25464):map__25464);
var file_msg = map__25464__$1;
var request_url = cljs.core.get.call(null,map__25464__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25464,map__25464__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25464,map__25464__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__){
return (function (state_25488){
var state_val_25489 = (state_25488[(1)]);
if((state_val_25489 === (7))){
var inst_25484 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
var statearr_25490_25510 = state_25488__$1;
(statearr_25490_25510[(2)] = inst_25484);

(statearr_25490_25510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (1))){
var state_25488__$1 = state_25488;
var statearr_25491_25511 = state_25488__$1;
(statearr_25491_25511[(2)] = null);

(statearr_25491_25511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (4))){
var inst_25468 = (state_25488[(7)]);
var inst_25468__$1 = (state_25488[(2)]);
var state_25488__$1 = (function (){var statearr_25492 = state_25488;
(statearr_25492[(7)] = inst_25468__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25468__$1)){
var statearr_25493_25512 = state_25488__$1;
(statearr_25493_25512[(1)] = (5));

} else {
var statearr_25494_25513 = state_25488__$1;
(statearr_25494_25513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (6))){
var state_25488__$1 = state_25488;
var statearr_25495_25514 = state_25488__$1;
(statearr_25495_25514[(2)] = null);

(statearr_25495_25514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (3))){
var inst_25486 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25488__$1,inst_25486);
} else {
if((state_val_25489 === (2))){
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25488__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25489 === (11))){
var inst_25480 = (state_25488[(2)]);
var state_25488__$1 = (function (){var statearr_25496 = state_25488;
(statearr_25496[(8)] = inst_25480);

return statearr_25496;
})();
var statearr_25497_25515 = state_25488__$1;
(statearr_25497_25515[(2)] = null);

(statearr_25497_25515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (9))){
var inst_25474 = (state_25488[(9)]);
var inst_25472 = (state_25488[(10)]);
var inst_25476 = inst_25474.call(null,inst_25472);
var state_25488__$1 = state_25488;
var statearr_25498_25516 = state_25488__$1;
(statearr_25498_25516[(2)] = inst_25476);

(statearr_25498_25516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (5))){
var inst_25468 = (state_25488[(7)]);
var inst_25470 = figwheel.client.file_reloading.blocking_load.call(null,inst_25468);
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25488__$1,(8),inst_25470);
} else {
if((state_val_25489 === (10))){
var inst_25472 = (state_25488[(10)]);
var inst_25478 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25472);
var state_25488__$1 = state_25488;
var statearr_25499_25517 = state_25488__$1;
(statearr_25499_25517[(2)] = inst_25478);

(statearr_25499_25517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (8))){
var inst_25468 = (state_25488[(7)]);
var inst_25474 = (state_25488[(9)]);
var inst_25472 = (state_25488[(2)]);
var inst_25473 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25474__$1 = cljs.core.get.call(null,inst_25473,inst_25468);
var state_25488__$1 = (function (){var statearr_25500 = state_25488;
(statearr_25500[(9)] = inst_25474__$1);

(statearr_25500[(10)] = inst_25472);

return statearr_25500;
})();
if(cljs.core.truth_(inst_25474__$1)){
var statearr_25501_25518 = state_25488__$1;
(statearr_25501_25518[(1)] = (9));

} else {
var statearr_25502_25519 = state_25488__$1;
(statearr_25502_25519[(1)] = (10));

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
});})(c__20253__auto__))
;
return ((function (switch__20141__auto__,c__20253__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20142__auto__ = null;
var figwheel$client$file_reloading$state_machine__20142__auto____0 = (function (){
var statearr_25506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25506[(0)] = figwheel$client$file_reloading$state_machine__20142__auto__);

(statearr_25506[(1)] = (1));

return statearr_25506;
});
var figwheel$client$file_reloading$state_machine__20142__auto____1 = (function (state_25488){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_25488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e25507){if((e25507 instanceof Object)){
var ex__20145__auto__ = e25507;
var statearr_25508_25520 = state_25488;
(statearr_25508_25520[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25521 = state_25488;
state_25488 = G__25521;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20142__auto__ = function(state_25488){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20142__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20142__auto____1.call(this,state_25488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20142__auto____0;
figwheel$client$file_reloading$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20142__auto____1;
return figwheel$client$file_reloading$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__))
})();
var state__20255__auto__ = (function (){var statearr_25509 = f__20254__auto__.call(null);
(statearr_25509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_25509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__))
);

return c__20253__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25522,callback){
var map__25525 = p__25522;
var map__25525__$1 = ((((!((map__25525 == null)))?((((map__25525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25525):map__25525);
var file_msg = map__25525__$1;
var namespace = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25525,map__25525__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25525,map__25525__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25527){
var map__25530 = p__25527;
var map__25530__$1 = ((((!((map__25530 == null)))?((((map__25530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25530):map__25530);
var file_msg = map__25530__$1;
var namespace = cljs.core.get.call(null,map__25530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25532,callback){
var map__25535 = p__25532;
var map__25535__$1 = ((((!((map__25535 == null)))?((((map__25535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25535):map__25535);
var file_msg = map__25535__$1;
var request_url = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20253__auto___25623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___25623,out){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___25623,out){
return (function (state_25605){
var state_val_25606 = (state_25605[(1)]);
if((state_val_25606 === (1))){
var inst_25583 = cljs.core.nth.call(null,files,(0),null);
var inst_25584 = cljs.core.nthnext.call(null,files,(1));
var inst_25585 = files;
var state_25605__$1 = (function (){var statearr_25607 = state_25605;
(statearr_25607[(7)] = inst_25584);

(statearr_25607[(8)] = inst_25585);

(statearr_25607[(9)] = inst_25583);

return statearr_25607;
})();
var statearr_25608_25624 = state_25605__$1;
(statearr_25608_25624[(2)] = null);

(statearr_25608_25624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (2))){
var inst_25588 = (state_25605[(10)]);
var inst_25585 = (state_25605[(8)]);
var inst_25588__$1 = cljs.core.nth.call(null,inst_25585,(0),null);
var inst_25589 = cljs.core.nthnext.call(null,inst_25585,(1));
var inst_25590 = (inst_25588__$1 == null);
var inst_25591 = cljs.core.not.call(null,inst_25590);
var state_25605__$1 = (function (){var statearr_25609 = state_25605;
(statearr_25609[(10)] = inst_25588__$1);

(statearr_25609[(11)] = inst_25589);

return statearr_25609;
})();
if(inst_25591){
var statearr_25610_25625 = state_25605__$1;
(statearr_25610_25625[(1)] = (4));

} else {
var statearr_25611_25626 = state_25605__$1;
(statearr_25611_25626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (3))){
var inst_25603 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25605__$1,inst_25603);
} else {
if((state_val_25606 === (4))){
var inst_25588 = (state_25605[(10)]);
var inst_25593 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25588);
var state_25605__$1 = state_25605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25605__$1,(7),inst_25593);
} else {
if((state_val_25606 === (5))){
var inst_25599 = cljs.core.async.close_BANG_.call(null,out);
var state_25605__$1 = state_25605;
var statearr_25612_25627 = state_25605__$1;
(statearr_25612_25627[(2)] = inst_25599);

(statearr_25612_25627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (6))){
var inst_25601 = (state_25605[(2)]);
var state_25605__$1 = state_25605;
var statearr_25613_25628 = state_25605__$1;
(statearr_25613_25628[(2)] = inst_25601);

(statearr_25613_25628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25606 === (7))){
var inst_25589 = (state_25605[(11)]);
var inst_25595 = (state_25605[(2)]);
var inst_25596 = cljs.core.async.put_BANG_.call(null,out,inst_25595);
var inst_25585 = inst_25589;
var state_25605__$1 = (function (){var statearr_25614 = state_25605;
(statearr_25614[(8)] = inst_25585);

(statearr_25614[(12)] = inst_25596);

return statearr_25614;
})();
var statearr_25615_25629 = state_25605__$1;
(statearr_25615_25629[(2)] = null);

(statearr_25615_25629[(1)] = (2));


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
});})(c__20253__auto___25623,out))
;
return ((function (switch__20141__auto__,c__20253__auto___25623,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto____0 = (function (){
var statearr_25619 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25619[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto__);

(statearr_25619[(1)] = (1));

return statearr_25619;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto____1 = (function (state_25605){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_25605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e25620){if((e25620 instanceof Object)){
var ex__20145__auto__ = e25620;
var statearr_25621_25630 = state_25605;
(statearr_25621_25630[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25631 = state_25605;
state_25605 = G__25631;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto__ = function(state_25605){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto____1.call(this,state_25605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___25623,out))
})();
var state__20255__auto__ = (function (){var statearr_25622 = f__20254__auto__.call(null);
(statearr_25622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___25623);

return statearr_25622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___25623,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25632,opts){
var map__25636 = p__25632;
var map__25636__$1 = ((((!((map__25636 == null)))?((((map__25636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25636):map__25636);
var eval_body__$1 = cljs.core.get.call(null,map__25636__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25638){var e = e25638;
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
return (function (p1__25639_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25639_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25644){
var vec__25645 = p__25644;
var k = cljs.core.nth.call(null,vec__25645,(0),null);
var v = cljs.core.nth.call(null,vec__25645,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25646){
var vec__25647 = p__25646;
var k = cljs.core.nth.call(null,vec__25647,(0),null);
var v = cljs.core.nth.call(null,vec__25647,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25651,p__25652){
var map__25899 = p__25651;
var map__25899__$1 = ((((!((map__25899 == null)))?((((map__25899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25899):map__25899);
var opts = map__25899__$1;
var before_jsload = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25900 = p__25652;
var map__25900__$1 = ((((!((map__25900 == null)))?((((map__25900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25900):map__25900);
var msg = map__25900__$1;
var files = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26053){
var state_val_26054 = (state_26053[(1)]);
if((state_val_26054 === (7))){
var inst_25917 = (state_26053[(7)]);
var inst_25914 = (state_26053[(8)]);
var inst_25916 = (state_26053[(9)]);
var inst_25915 = (state_26053[(10)]);
var inst_25922 = cljs.core._nth.call(null,inst_25915,inst_25917);
var inst_25923 = figwheel.client.file_reloading.eval_body.call(null,inst_25922,opts);
var inst_25924 = (inst_25917 + (1));
var tmp26055 = inst_25914;
var tmp26056 = inst_25916;
var tmp26057 = inst_25915;
var inst_25914__$1 = tmp26055;
var inst_25915__$1 = tmp26057;
var inst_25916__$1 = tmp26056;
var inst_25917__$1 = inst_25924;
var state_26053__$1 = (function (){var statearr_26058 = state_26053;
(statearr_26058[(7)] = inst_25917__$1);

(statearr_26058[(8)] = inst_25914__$1);

(statearr_26058[(11)] = inst_25923);

(statearr_26058[(9)] = inst_25916__$1);

(statearr_26058[(10)] = inst_25915__$1);

return statearr_26058;
})();
var statearr_26059_26145 = state_26053__$1;
(statearr_26059_26145[(2)] = null);

(statearr_26059_26145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (20))){
var inst_25957 = (state_26053[(12)]);
var inst_25965 = figwheel.client.file_reloading.sort_files.call(null,inst_25957);
var state_26053__$1 = state_26053;
var statearr_26060_26146 = state_26053__$1;
(statearr_26060_26146[(2)] = inst_25965);

(statearr_26060_26146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (27))){
var state_26053__$1 = state_26053;
var statearr_26061_26147 = state_26053__$1;
(statearr_26061_26147[(2)] = null);

(statearr_26061_26147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (1))){
var inst_25906 = (state_26053[(13)]);
var inst_25903 = before_jsload.call(null,files);
var inst_25904 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25905 = (function (){return ((function (inst_25906,inst_25903,inst_25904,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25648_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25648_SHARP_);
});
;})(inst_25906,inst_25903,inst_25904,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25906__$1 = cljs.core.filter.call(null,inst_25905,files);
var inst_25907 = cljs.core.not_empty.call(null,inst_25906__$1);
var state_26053__$1 = (function (){var statearr_26062 = state_26053;
(statearr_26062[(13)] = inst_25906__$1);

(statearr_26062[(14)] = inst_25904);

(statearr_26062[(15)] = inst_25903);

return statearr_26062;
})();
if(cljs.core.truth_(inst_25907)){
var statearr_26063_26148 = state_26053__$1;
(statearr_26063_26148[(1)] = (2));

} else {
var statearr_26064_26149 = state_26053__$1;
(statearr_26064_26149[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (24))){
var state_26053__$1 = state_26053;
var statearr_26065_26150 = state_26053__$1;
(statearr_26065_26150[(2)] = null);

(statearr_26065_26150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (39))){
var inst_26007 = (state_26053[(16)]);
var state_26053__$1 = state_26053;
var statearr_26066_26151 = state_26053__$1;
(statearr_26066_26151[(2)] = inst_26007);

(statearr_26066_26151[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (46))){
var inst_26048 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26067_26152 = state_26053__$1;
(statearr_26067_26152[(2)] = inst_26048);

(statearr_26067_26152[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (4))){
var inst_25951 = (state_26053[(2)]);
var inst_25952 = cljs.core.List.EMPTY;
var inst_25953 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25952);
var inst_25954 = (function (){return ((function (inst_25951,inst_25952,inst_25953,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25649_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25649_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25649_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_25951,inst_25952,inst_25953,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25955 = cljs.core.filter.call(null,inst_25954,files);
var inst_25956 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25957 = cljs.core.concat.call(null,inst_25955,inst_25956);
var state_26053__$1 = (function (){var statearr_26068 = state_26053;
(statearr_26068[(17)] = inst_25951);

(statearr_26068[(12)] = inst_25957);

(statearr_26068[(18)] = inst_25953);

return statearr_26068;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26069_26153 = state_26053__$1;
(statearr_26069_26153[(1)] = (16));

} else {
var statearr_26070_26154 = state_26053__$1;
(statearr_26070_26154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (15))){
var inst_25941 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26071_26155 = state_26053__$1;
(statearr_26071_26155[(2)] = inst_25941);

(statearr_26071_26155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (21))){
var inst_25967 = (state_26053[(19)]);
var inst_25967__$1 = (state_26053[(2)]);
var inst_25968 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25967__$1);
var state_26053__$1 = (function (){var statearr_26072 = state_26053;
(statearr_26072[(19)] = inst_25967__$1);

return statearr_26072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26053__$1,(22),inst_25968);
} else {
if((state_val_26054 === (31))){
var inst_26051 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26053__$1,inst_26051);
} else {
if((state_val_26054 === (32))){
var inst_26007 = (state_26053[(16)]);
var inst_26012 = inst_26007.cljs$lang$protocol_mask$partition0$;
var inst_26013 = (inst_26012 & (64));
var inst_26014 = inst_26007.cljs$core$ISeq$;
var inst_26015 = (inst_26013) || (inst_26014);
var state_26053__$1 = state_26053;
if(cljs.core.truth_(inst_26015)){
var statearr_26073_26156 = state_26053__$1;
(statearr_26073_26156[(1)] = (35));

} else {
var statearr_26074_26157 = state_26053__$1;
(statearr_26074_26157[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (40))){
var inst_26028 = (state_26053[(20)]);
var inst_26027 = (state_26053[(2)]);
var inst_26028__$1 = cljs.core.get.call(null,inst_26027,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26029 = cljs.core.get.call(null,inst_26027,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26030 = cljs.core.not_empty.call(null,inst_26028__$1);
var state_26053__$1 = (function (){var statearr_26075 = state_26053;
(statearr_26075[(21)] = inst_26029);

(statearr_26075[(20)] = inst_26028__$1);

return statearr_26075;
})();
if(cljs.core.truth_(inst_26030)){
var statearr_26076_26158 = state_26053__$1;
(statearr_26076_26158[(1)] = (41));

} else {
var statearr_26077_26159 = state_26053__$1;
(statearr_26077_26159[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (33))){
var state_26053__$1 = state_26053;
var statearr_26078_26160 = state_26053__$1;
(statearr_26078_26160[(2)] = false);

(statearr_26078_26160[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (13))){
var inst_25927 = (state_26053[(22)]);
var inst_25931 = cljs.core.chunk_first.call(null,inst_25927);
var inst_25932 = cljs.core.chunk_rest.call(null,inst_25927);
var inst_25933 = cljs.core.count.call(null,inst_25931);
var inst_25914 = inst_25932;
var inst_25915 = inst_25931;
var inst_25916 = inst_25933;
var inst_25917 = (0);
var state_26053__$1 = (function (){var statearr_26079 = state_26053;
(statearr_26079[(7)] = inst_25917);

(statearr_26079[(8)] = inst_25914);

(statearr_26079[(9)] = inst_25916);

(statearr_26079[(10)] = inst_25915);

return statearr_26079;
})();
var statearr_26080_26161 = state_26053__$1;
(statearr_26080_26161[(2)] = null);

(statearr_26080_26161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (22))){
var inst_25970 = (state_26053[(23)]);
var inst_25967 = (state_26053[(19)]);
var inst_25971 = (state_26053[(24)]);
var inst_25975 = (state_26053[(25)]);
var inst_25970__$1 = (state_26053[(2)]);
var inst_25971__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25970__$1);
var inst_25972 = (function (){var all_files = inst_25967;
var res_SINGLEQUOTE_ = inst_25970__$1;
var res = inst_25971__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25970,inst_25967,inst_25971,inst_25975,inst_25970__$1,inst_25971__$1,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25650_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25650_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25970,inst_25967,inst_25971,inst_25975,inst_25970__$1,inst_25971__$1,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25973 = cljs.core.filter.call(null,inst_25972,inst_25970__$1);
var inst_25974 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25975__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25974);
var inst_25976 = cljs.core.not_empty.call(null,inst_25975__$1);
var state_26053__$1 = (function (){var statearr_26081 = state_26053;
(statearr_26081[(23)] = inst_25970__$1);

(statearr_26081[(26)] = inst_25973);

(statearr_26081[(24)] = inst_25971__$1);

(statearr_26081[(25)] = inst_25975__$1);

return statearr_26081;
})();
if(cljs.core.truth_(inst_25976)){
var statearr_26082_26162 = state_26053__$1;
(statearr_26082_26162[(1)] = (23));

} else {
var statearr_26083_26163 = state_26053__$1;
(statearr_26083_26163[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (36))){
var state_26053__$1 = state_26053;
var statearr_26084_26164 = state_26053__$1;
(statearr_26084_26164[(2)] = false);

(statearr_26084_26164[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (41))){
var inst_26028 = (state_26053[(20)]);
var inst_26032 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26033 = cljs.core.map.call(null,inst_26032,inst_26028);
var inst_26034 = cljs.core.pr_str.call(null,inst_26033);
var inst_26035 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26034)].join('');
var inst_26036 = figwheel.client.utils.log.call(null,inst_26035);
var state_26053__$1 = state_26053;
var statearr_26085_26165 = state_26053__$1;
(statearr_26085_26165[(2)] = inst_26036);

(statearr_26085_26165[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (43))){
var inst_26029 = (state_26053[(21)]);
var inst_26039 = (state_26053[(2)]);
var inst_26040 = cljs.core.not_empty.call(null,inst_26029);
var state_26053__$1 = (function (){var statearr_26086 = state_26053;
(statearr_26086[(27)] = inst_26039);

return statearr_26086;
})();
if(cljs.core.truth_(inst_26040)){
var statearr_26087_26166 = state_26053__$1;
(statearr_26087_26166[(1)] = (44));

} else {
var statearr_26088_26167 = state_26053__$1;
(statearr_26088_26167[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (29))){
var inst_25970 = (state_26053[(23)]);
var inst_25973 = (state_26053[(26)]);
var inst_25967 = (state_26053[(19)]);
var inst_25971 = (state_26053[(24)]);
var inst_26007 = (state_26053[(16)]);
var inst_25975 = (state_26053[(25)]);
var inst_26003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26006 = (function (){var all_files = inst_25967;
var res_SINGLEQUOTE_ = inst_25970;
var res = inst_25971;
var files_not_loaded = inst_25973;
var dependencies_that_loaded = inst_25975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_26007,inst_25975,inst_26003,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26005){
var map__26089 = p__26005;
var map__26089__$1 = ((((!((map__26089 == null)))?((((map__26089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26089):map__26089);
var namespace = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_26007,inst_25975,inst_26003,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26007__$1 = cljs.core.group_by.call(null,inst_26006,inst_25973);
var inst_26009 = (inst_26007__$1 == null);
var inst_26010 = cljs.core.not.call(null,inst_26009);
var state_26053__$1 = (function (){var statearr_26091 = state_26053;
(statearr_26091[(28)] = inst_26003);

(statearr_26091[(16)] = inst_26007__$1);

return statearr_26091;
})();
if(inst_26010){
var statearr_26092_26168 = state_26053__$1;
(statearr_26092_26168[(1)] = (32));

} else {
var statearr_26093_26169 = state_26053__$1;
(statearr_26093_26169[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (44))){
var inst_26029 = (state_26053[(21)]);
var inst_26042 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26029);
var inst_26043 = cljs.core.pr_str.call(null,inst_26042);
var inst_26044 = [cljs.core.str("not required: "),cljs.core.str(inst_26043)].join('');
var inst_26045 = figwheel.client.utils.log.call(null,inst_26044);
var state_26053__$1 = state_26053;
var statearr_26094_26170 = state_26053__$1;
(statearr_26094_26170[(2)] = inst_26045);

(statearr_26094_26170[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (6))){
var inst_25948 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26095_26171 = state_26053__$1;
(statearr_26095_26171[(2)] = inst_25948);

(statearr_26095_26171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (28))){
var inst_25973 = (state_26053[(26)]);
var inst_26000 = (state_26053[(2)]);
var inst_26001 = cljs.core.not_empty.call(null,inst_25973);
var state_26053__$1 = (function (){var statearr_26096 = state_26053;
(statearr_26096[(29)] = inst_26000);

return statearr_26096;
})();
if(cljs.core.truth_(inst_26001)){
var statearr_26097_26172 = state_26053__$1;
(statearr_26097_26172[(1)] = (29));

} else {
var statearr_26098_26173 = state_26053__$1;
(statearr_26098_26173[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (25))){
var inst_25971 = (state_26053[(24)]);
var inst_25987 = (state_26053[(2)]);
var inst_25988 = cljs.core.not_empty.call(null,inst_25971);
var state_26053__$1 = (function (){var statearr_26099 = state_26053;
(statearr_26099[(30)] = inst_25987);

return statearr_26099;
})();
if(cljs.core.truth_(inst_25988)){
var statearr_26100_26174 = state_26053__$1;
(statearr_26100_26174[(1)] = (26));

} else {
var statearr_26101_26175 = state_26053__$1;
(statearr_26101_26175[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (34))){
var inst_26022 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
if(cljs.core.truth_(inst_26022)){
var statearr_26102_26176 = state_26053__$1;
(statearr_26102_26176[(1)] = (38));

} else {
var statearr_26103_26177 = state_26053__$1;
(statearr_26103_26177[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (17))){
var state_26053__$1 = state_26053;
var statearr_26104_26178 = state_26053__$1;
(statearr_26104_26178[(2)] = recompile_dependents);

(statearr_26104_26178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (3))){
var state_26053__$1 = state_26053;
var statearr_26105_26179 = state_26053__$1;
(statearr_26105_26179[(2)] = null);

(statearr_26105_26179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (12))){
var inst_25944 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26106_26180 = state_26053__$1;
(statearr_26106_26180[(2)] = inst_25944);

(statearr_26106_26180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (2))){
var inst_25906 = (state_26053[(13)]);
var inst_25913 = cljs.core.seq.call(null,inst_25906);
var inst_25914 = inst_25913;
var inst_25915 = null;
var inst_25916 = (0);
var inst_25917 = (0);
var state_26053__$1 = (function (){var statearr_26107 = state_26053;
(statearr_26107[(7)] = inst_25917);

(statearr_26107[(8)] = inst_25914);

(statearr_26107[(9)] = inst_25916);

(statearr_26107[(10)] = inst_25915);

return statearr_26107;
})();
var statearr_26108_26181 = state_26053__$1;
(statearr_26108_26181[(2)] = null);

(statearr_26108_26181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (23))){
var inst_25970 = (state_26053[(23)]);
var inst_25973 = (state_26053[(26)]);
var inst_25967 = (state_26053[(19)]);
var inst_25971 = (state_26053[(24)]);
var inst_25975 = (state_26053[(25)]);
var inst_25978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25980 = (function (){var all_files = inst_25967;
var res_SINGLEQUOTE_ = inst_25970;
var res = inst_25971;
var files_not_loaded = inst_25973;
var dependencies_that_loaded = inst_25975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_25975,inst_25978,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25979){
var map__26109 = p__25979;
var map__26109__$1 = ((((!((map__26109 == null)))?((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26109):map__26109);
var request_url = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_25975,inst_25978,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25981 = cljs.core.reverse.call(null,inst_25975);
var inst_25982 = cljs.core.map.call(null,inst_25980,inst_25981);
var inst_25983 = cljs.core.pr_str.call(null,inst_25982);
var inst_25984 = figwheel.client.utils.log.call(null,inst_25983);
var state_26053__$1 = (function (){var statearr_26111 = state_26053;
(statearr_26111[(31)] = inst_25978);

return statearr_26111;
})();
var statearr_26112_26182 = state_26053__$1;
(statearr_26112_26182[(2)] = inst_25984);

(statearr_26112_26182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (35))){
var state_26053__$1 = state_26053;
var statearr_26113_26183 = state_26053__$1;
(statearr_26113_26183[(2)] = true);

(statearr_26113_26183[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (19))){
var inst_25957 = (state_26053[(12)]);
var inst_25963 = figwheel.client.file_reloading.expand_files.call(null,inst_25957);
var state_26053__$1 = state_26053;
var statearr_26114_26184 = state_26053__$1;
(statearr_26114_26184[(2)] = inst_25963);

(statearr_26114_26184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (11))){
var state_26053__$1 = state_26053;
var statearr_26115_26185 = state_26053__$1;
(statearr_26115_26185[(2)] = null);

(statearr_26115_26185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (9))){
var inst_25946 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26116_26186 = state_26053__$1;
(statearr_26116_26186[(2)] = inst_25946);

(statearr_26116_26186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (5))){
var inst_25917 = (state_26053[(7)]);
var inst_25916 = (state_26053[(9)]);
var inst_25919 = (inst_25917 < inst_25916);
var inst_25920 = inst_25919;
var state_26053__$1 = state_26053;
if(cljs.core.truth_(inst_25920)){
var statearr_26117_26187 = state_26053__$1;
(statearr_26117_26187[(1)] = (7));

} else {
var statearr_26118_26188 = state_26053__$1;
(statearr_26118_26188[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (14))){
var inst_25927 = (state_26053[(22)]);
var inst_25936 = cljs.core.first.call(null,inst_25927);
var inst_25937 = figwheel.client.file_reloading.eval_body.call(null,inst_25936,opts);
var inst_25938 = cljs.core.next.call(null,inst_25927);
var inst_25914 = inst_25938;
var inst_25915 = null;
var inst_25916 = (0);
var inst_25917 = (0);
var state_26053__$1 = (function (){var statearr_26119 = state_26053;
(statearr_26119[(32)] = inst_25937);

(statearr_26119[(7)] = inst_25917);

(statearr_26119[(8)] = inst_25914);

(statearr_26119[(9)] = inst_25916);

(statearr_26119[(10)] = inst_25915);

return statearr_26119;
})();
var statearr_26120_26189 = state_26053__$1;
(statearr_26120_26189[(2)] = null);

(statearr_26120_26189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (45))){
var state_26053__$1 = state_26053;
var statearr_26121_26190 = state_26053__$1;
(statearr_26121_26190[(2)] = null);

(statearr_26121_26190[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (26))){
var inst_25970 = (state_26053[(23)]);
var inst_25973 = (state_26053[(26)]);
var inst_25967 = (state_26053[(19)]);
var inst_25971 = (state_26053[(24)]);
var inst_25975 = (state_26053[(25)]);
var inst_25990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25992 = (function (){var all_files = inst_25967;
var res_SINGLEQUOTE_ = inst_25970;
var res = inst_25971;
var files_not_loaded = inst_25973;
var dependencies_that_loaded = inst_25975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_25975,inst_25990,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25991){
var map__26122 = p__25991;
var map__26122__$1 = ((((!((map__26122 == null)))?((((map__26122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26122):map__26122);
var namespace = cljs.core.get.call(null,map__26122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_25975,inst_25990,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25993 = cljs.core.map.call(null,inst_25992,inst_25971);
var inst_25994 = cljs.core.pr_str.call(null,inst_25993);
var inst_25995 = figwheel.client.utils.log.call(null,inst_25994);
var inst_25996 = (function (){var all_files = inst_25967;
var res_SINGLEQUOTE_ = inst_25970;
var res = inst_25971;
var files_not_loaded = inst_25973;
var dependencies_that_loaded = inst_25975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_25975,inst_25990,inst_25992,inst_25993,inst_25994,inst_25995,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25970,inst_25973,inst_25967,inst_25971,inst_25975,inst_25990,inst_25992,inst_25993,inst_25994,inst_25995,state_val_26054,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25997 = setTimeout(inst_25996,(10));
var state_26053__$1 = (function (){var statearr_26124 = state_26053;
(statearr_26124[(33)] = inst_25990);

(statearr_26124[(34)] = inst_25995);

return statearr_26124;
})();
var statearr_26125_26191 = state_26053__$1;
(statearr_26125_26191[(2)] = inst_25997);

(statearr_26125_26191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (16))){
var state_26053__$1 = state_26053;
var statearr_26126_26192 = state_26053__$1;
(statearr_26126_26192[(2)] = reload_dependents);

(statearr_26126_26192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (38))){
var inst_26007 = (state_26053[(16)]);
var inst_26024 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26007);
var state_26053__$1 = state_26053;
var statearr_26127_26193 = state_26053__$1;
(statearr_26127_26193[(2)] = inst_26024);

(statearr_26127_26193[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (30))){
var state_26053__$1 = state_26053;
var statearr_26128_26194 = state_26053__$1;
(statearr_26128_26194[(2)] = null);

(statearr_26128_26194[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (10))){
var inst_25927 = (state_26053[(22)]);
var inst_25929 = cljs.core.chunked_seq_QMARK_.call(null,inst_25927);
var state_26053__$1 = state_26053;
if(inst_25929){
var statearr_26129_26195 = state_26053__$1;
(statearr_26129_26195[(1)] = (13));

} else {
var statearr_26130_26196 = state_26053__$1;
(statearr_26130_26196[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (18))){
var inst_25961 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
if(cljs.core.truth_(inst_25961)){
var statearr_26131_26197 = state_26053__$1;
(statearr_26131_26197[(1)] = (19));

} else {
var statearr_26132_26198 = state_26053__$1;
(statearr_26132_26198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (42))){
var state_26053__$1 = state_26053;
var statearr_26133_26199 = state_26053__$1;
(statearr_26133_26199[(2)] = null);

(statearr_26133_26199[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (37))){
var inst_26019 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26134_26200 = state_26053__$1;
(statearr_26134_26200[(2)] = inst_26019);

(statearr_26134_26200[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (8))){
var inst_25927 = (state_26053[(22)]);
var inst_25914 = (state_26053[(8)]);
var inst_25927__$1 = cljs.core.seq.call(null,inst_25914);
var state_26053__$1 = (function (){var statearr_26135 = state_26053;
(statearr_26135[(22)] = inst_25927__$1);

return statearr_26135;
})();
if(inst_25927__$1){
var statearr_26136_26201 = state_26053__$1;
(statearr_26136_26201[(1)] = (10));

} else {
var statearr_26137_26202 = state_26053__$1;
(statearr_26137_26202[(1)] = (11));

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
});})(c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20141__auto__,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto____0 = (function (){
var statearr_26141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26141[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto__);

(statearr_26141[(1)] = (1));

return statearr_26141;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto____1 = (function (state_26053){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_26053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e26142){if((e26142 instanceof Object)){
var ex__20145__auto__ = e26142;
var statearr_26143_26203 = state_26053;
(statearr_26143_26203[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26204 = state_26053;
state_26053 = G__26204;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto__ = function(state_26053){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto____1.call(this,state_26053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20255__auto__ = (function (){var statearr_26144 = f__20254__auto__.call(null);
(statearr_26144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_26144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__,map__25899,map__25899__$1,opts,before_jsload,on_jsload,reload_dependents,map__25900,map__25900__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20253__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26207,link){
var map__26210 = p__26207;
var map__26210__$1 = ((((!((map__26210 == null)))?((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26210):map__26210);
var file = cljs.core.get.call(null,map__26210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26210,map__26210__$1,file){
return (function (p1__26205_SHARP_,p2__26206_SHARP_){
if(cljs.core._EQ_.call(null,p1__26205_SHARP_,p2__26206_SHARP_)){
return p1__26205_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26210,map__26210__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26216){
var map__26217 = p__26216;
var map__26217__$1 = ((((!((map__26217 == null)))?((((map__26217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26217):map__26217);
var match_length = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26212_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26212_SHARP_);
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
var args26219 = [];
var len__17884__auto___26222 = arguments.length;
var i__17885__auto___26223 = (0);
while(true){
if((i__17885__auto___26223 < len__17884__auto___26222)){
args26219.push((arguments[i__17885__auto___26223]));

var G__26224 = (i__17885__auto___26223 + (1));
i__17885__auto___26223 = G__26224;
continue;
} else {
}
break;
}

var G__26221 = args26219.length;
switch (G__26221) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26219.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26226_SHARP_,p2__26227_SHARP_){
return cljs.core.assoc.call(null,p1__26226_SHARP_,cljs.core.get.call(null,p2__26227_SHARP_,key),p2__26227_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26228){
var map__26231 = p__26228;
var map__26231__$1 = ((((!((map__26231 == null)))?((((map__26231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26231):map__26231);
var f_data = map__26231__$1;
var file = cljs.core.get.call(null,map__26231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26233,files_msg){
var map__26240 = p__26233;
var map__26240__$1 = ((((!((map__26240 == null)))?((((map__26240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26240):map__26240);
var opts = map__26240__$1;
var on_cssload = cljs.core.get.call(null,map__26240__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26242_26246 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26243_26247 = null;
var count__26244_26248 = (0);
var i__26245_26249 = (0);
while(true){
if((i__26245_26249 < count__26244_26248)){
var f_26250 = cljs.core._nth.call(null,chunk__26243_26247,i__26245_26249);
figwheel.client.file_reloading.reload_css_file.call(null,f_26250);

var G__26251 = seq__26242_26246;
var G__26252 = chunk__26243_26247;
var G__26253 = count__26244_26248;
var G__26254 = (i__26245_26249 + (1));
seq__26242_26246 = G__26251;
chunk__26243_26247 = G__26252;
count__26244_26248 = G__26253;
i__26245_26249 = G__26254;
continue;
} else {
var temp__4425__auto___26255 = cljs.core.seq.call(null,seq__26242_26246);
if(temp__4425__auto___26255){
var seq__26242_26256__$1 = temp__4425__auto___26255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26242_26256__$1)){
var c__17629__auto___26257 = cljs.core.chunk_first.call(null,seq__26242_26256__$1);
var G__26258 = cljs.core.chunk_rest.call(null,seq__26242_26256__$1);
var G__26259 = c__17629__auto___26257;
var G__26260 = cljs.core.count.call(null,c__17629__auto___26257);
var G__26261 = (0);
seq__26242_26246 = G__26258;
chunk__26243_26247 = G__26259;
count__26244_26248 = G__26260;
i__26245_26249 = G__26261;
continue;
} else {
var f_26262 = cljs.core.first.call(null,seq__26242_26256__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26262);

var G__26263 = cljs.core.next.call(null,seq__26242_26256__$1);
var G__26264 = null;
var G__26265 = (0);
var G__26266 = (0);
seq__26242_26246 = G__26263;
chunk__26243_26247 = G__26264;
count__26244_26248 = G__26265;
i__26245_26249 = G__26266;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26240,map__26240__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26240,map__26240__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1452098823232