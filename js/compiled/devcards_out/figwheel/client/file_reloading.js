// Compiled by ClojureScript 1.9.229 {}
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
var or__18716__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18716__auto__){
return or__18716__auto__;
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
var or__18716__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29475_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29475_SHARP_));
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
var seq__29480 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29481 = null;
var count__29482 = (0);
var i__29483 = (0);
while(true){
if((i__29483 < count__29482)){
var n = cljs.core._nth.call(null,chunk__29481,i__29483);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29484 = seq__29480;
var G__29485 = chunk__29481;
var G__29486 = count__29482;
var G__29487 = (i__29483 + (1));
seq__29480 = G__29484;
chunk__29481 = G__29485;
count__29482 = G__29486;
i__29483 = G__29487;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29480);
if(temp__4657__auto__){
var seq__29480__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29480__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__29480__$1);
var G__29488 = cljs.core.chunk_rest.call(null,seq__29480__$1);
var G__29489 = c__19527__auto__;
var G__29490 = cljs.core.count.call(null,c__19527__auto__);
var G__29491 = (0);
seq__29480 = G__29488;
chunk__29481 = G__29489;
count__29482 = G__29490;
i__29483 = G__29491;
continue;
} else {
var n = cljs.core.first.call(null,seq__29480__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29492 = cljs.core.next.call(null,seq__29480__$1);
var G__29493 = null;
var G__29494 = (0);
var G__29495 = (0);
seq__29480 = G__29492;
chunk__29481 = G__29493;
count__29482 = G__29494;
i__29483 = G__29495;
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

var seq__29546_29557 = cljs.core.seq.call(null,deps);
var chunk__29547_29558 = null;
var count__29548_29559 = (0);
var i__29549_29560 = (0);
while(true){
if((i__29549_29560 < count__29548_29559)){
var dep_29561 = cljs.core._nth.call(null,chunk__29547_29558,i__29549_29560);
topo_sort_helper_STAR_.call(null,dep_29561,(depth + (1)),state);

var G__29562 = seq__29546_29557;
var G__29563 = chunk__29547_29558;
var G__29564 = count__29548_29559;
var G__29565 = (i__29549_29560 + (1));
seq__29546_29557 = G__29562;
chunk__29547_29558 = G__29563;
count__29548_29559 = G__29564;
i__29549_29560 = G__29565;
continue;
} else {
var temp__4657__auto___29566 = cljs.core.seq.call(null,seq__29546_29557);
if(temp__4657__auto___29566){
var seq__29546_29567__$1 = temp__4657__auto___29566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29546_29567__$1)){
var c__19527__auto___29568 = cljs.core.chunk_first.call(null,seq__29546_29567__$1);
var G__29569 = cljs.core.chunk_rest.call(null,seq__29546_29567__$1);
var G__29570 = c__19527__auto___29568;
var G__29571 = cljs.core.count.call(null,c__19527__auto___29568);
var G__29572 = (0);
seq__29546_29557 = G__29569;
chunk__29547_29558 = G__29570;
count__29548_29559 = G__29571;
i__29549_29560 = G__29572;
continue;
} else {
var dep_29573 = cljs.core.first.call(null,seq__29546_29567__$1);
topo_sort_helper_STAR_.call(null,dep_29573,(depth + (1)),state);

var G__29574 = cljs.core.next.call(null,seq__29546_29567__$1);
var G__29575 = null;
var G__29576 = (0);
var G__29577 = (0);
seq__29546_29557 = G__29574;
chunk__29547_29558 = G__29575;
count__29548_29559 = G__29576;
i__29549_29560 = G__29577;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29550){
var vec__29554 = p__29550;
var seq__29555 = cljs.core.seq.call(null,vec__29554);
var first__29556 = cljs.core.first.call(null,seq__29555);
var seq__29555__$1 = cljs.core.next.call(null,seq__29555);
var x = first__29556;
var xs = seq__29555__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29554,seq__29555,first__29556,seq__29555__$1,x,xs,get_deps__$1){
return (function (p1__29496_SHARP_){
return clojure.set.difference.call(null,p1__29496_SHARP_,x);
});})(vec__29554,seq__29555,first__29556,seq__29555__$1,x,xs,get_deps__$1))
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
var seq__29590 = cljs.core.seq.call(null,provides);
var chunk__29591 = null;
var count__29592 = (0);
var i__29593 = (0);
while(true){
if((i__29593 < count__29592)){
var prov = cljs.core._nth.call(null,chunk__29591,i__29593);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29594_29602 = cljs.core.seq.call(null,requires);
var chunk__29595_29603 = null;
var count__29596_29604 = (0);
var i__29597_29605 = (0);
while(true){
if((i__29597_29605 < count__29596_29604)){
var req_29606 = cljs.core._nth.call(null,chunk__29595_29603,i__29597_29605);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29606,prov);

var G__29607 = seq__29594_29602;
var G__29608 = chunk__29595_29603;
var G__29609 = count__29596_29604;
var G__29610 = (i__29597_29605 + (1));
seq__29594_29602 = G__29607;
chunk__29595_29603 = G__29608;
count__29596_29604 = G__29609;
i__29597_29605 = G__29610;
continue;
} else {
var temp__4657__auto___29611 = cljs.core.seq.call(null,seq__29594_29602);
if(temp__4657__auto___29611){
var seq__29594_29612__$1 = temp__4657__auto___29611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29594_29612__$1)){
var c__19527__auto___29613 = cljs.core.chunk_first.call(null,seq__29594_29612__$1);
var G__29614 = cljs.core.chunk_rest.call(null,seq__29594_29612__$1);
var G__29615 = c__19527__auto___29613;
var G__29616 = cljs.core.count.call(null,c__19527__auto___29613);
var G__29617 = (0);
seq__29594_29602 = G__29614;
chunk__29595_29603 = G__29615;
count__29596_29604 = G__29616;
i__29597_29605 = G__29617;
continue;
} else {
var req_29618 = cljs.core.first.call(null,seq__29594_29612__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29618,prov);

var G__29619 = cljs.core.next.call(null,seq__29594_29612__$1);
var G__29620 = null;
var G__29621 = (0);
var G__29622 = (0);
seq__29594_29602 = G__29619;
chunk__29595_29603 = G__29620;
count__29596_29604 = G__29621;
i__29597_29605 = G__29622;
continue;
}
} else {
}
}
break;
}

var G__29623 = seq__29590;
var G__29624 = chunk__29591;
var G__29625 = count__29592;
var G__29626 = (i__29593 + (1));
seq__29590 = G__29623;
chunk__29591 = G__29624;
count__29592 = G__29625;
i__29593 = G__29626;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29590);
if(temp__4657__auto__){
var seq__29590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29590__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__29590__$1);
var G__29627 = cljs.core.chunk_rest.call(null,seq__29590__$1);
var G__29628 = c__19527__auto__;
var G__29629 = cljs.core.count.call(null,c__19527__auto__);
var G__29630 = (0);
seq__29590 = G__29627;
chunk__29591 = G__29628;
count__29592 = G__29629;
i__29593 = G__29630;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29590__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29598_29631 = cljs.core.seq.call(null,requires);
var chunk__29599_29632 = null;
var count__29600_29633 = (0);
var i__29601_29634 = (0);
while(true){
if((i__29601_29634 < count__29600_29633)){
var req_29635 = cljs.core._nth.call(null,chunk__29599_29632,i__29601_29634);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29635,prov);

var G__29636 = seq__29598_29631;
var G__29637 = chunk__29599_29632;
var G__29638 = count__29600_29633;
var G__29639 = (i__29601_29634 + (1));
seq__29598_29631 = G__29636;
chunk__29599_29632 = G__29637;
count__29600_29633 = G__29638;
i__29601_29634 = G__29639;
continue;
} else {
var temp__4657__auto___29640__$1 = cljs.core.seq.call(null,seq__29598_29631);
if(temp__4657__auto___29640__$1){
var seq__29598_29641__$1 = temp__4657__auto___29640__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29598_29641__$1)){
var c__19527__auto___29642 = cljs.core.chunk_first.call(null,seq__29598_29641__$1);
var G__29643 = cljs.core.chunk_rest.call(null,seq__29598_29641__$1);
var G__29644 = c__19527__auto___29642;
var G__29645 = cljs.core.count.call(null,c__19527__auto___29642);
var G__29646 = (0);
seq__29598_29631 = G__29643;
chunk__29599_29632 = G__29644;
count__29600_29633 = G__29645;
i__29601_29634 = G__29646;
continue;
} else {
var req_29647 = cljs.core.first.call(null,seq__29598_29641__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29647,prov);

var G__29648 = cljs.core.next.call(null,seq__29598_29641__$1);
var G__29649 = null;
var G__29650 = (0);
var G__29651 = (0);
seq__29598_29631 = G__29648;
chunk__29599_29632 = G__29649;
count__29600_29633 = G__29650;
i__29601_29634 = G__29651;
continue;
}
} else {
}
}
break;
}

var G__29652 = cljs.core.next.call(null,seq__29590__$1);
var G__29653 = null;
var G__29654 = (0);
var G__29655 = (0);
seq__29590 = G__29652;
chunk__29591 = G__29653;
count__29592 = G__29654;
i__29593 = G__29655;
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
var seq__29660_29664 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29661_29665 = null;
var count__29662_29666 = (0);
var i__29663_29667 = (0);
while(true){
if((i__29663_29667 < count__29662_29666)){
var ns_29668 = cljs.core._nth.call(null,chunk__29661_29665,i__29663_29667);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29668);

var G__29669 = seq__29660_29664;
var G__29670 = chunk__29661_29665;
var G__29671 = count__29662_29666;
var G__29672 = (i__29663_29667 + (1));
seq__29660_29664 = G__29669;
chunk__29661_29665 = G__29670;
count__29662_29666 = G__29671;
i__29663_29667 = G__29672;
continue;
} else {
var temp__4657__auto___29673 = cljs.core.seq.call(null,seq__29660_29664);
if(temp__4657__auto___29673){
var seq__29660_29674__$1 = temp__4657__auto___29673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29660_29674__$1)){
var c__19527__auto___29675 = cljs.core.chunk_first.call(null,seq__29660_29674__$1);
var G__29676 = cljs.core.chunk_rest.call(null,seq__29660_29674__$1);
var G__29677 = c__19527__auto___29675;
var G__29678 = cljs.core.count.call(null,c__19527__auto___29675);
var G__29679 = (0);
seq__29660_29664 = G__29676;
chunk__29661_29665 = G__29677;
count__29662_29666 = G__29678;
i__29663_29667 = G__29679;
continue;
} else {
var ns_29680 = cljs.core.first.call(null,seq__29660_29674__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29680);

var G__29681 = cljs.core.next.call(null,seq__29660_29674__$1);
var G__29682 = null;
var G__29683 = (0);
var G__29684 = (0);
seq__29660_29664 = G__29681;
chunk__29661_29665 = G__29682;
count__29662_29666 = G__29683;
i__29663_29667 = G__29684;
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
goog.require_figwheel_backup_ = (function (){var or__18716__auto__ = goog.require__;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
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
var G__29685__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29686__i = 0, G__29686__a = new Array(arguments.length -  0);
while (G__29686__i < G__29686__a.length) {G__29686__a[G__29686__i] = arguments[G__29686__i + 0]; ++G__29686__i;}
  args = new cljs.core.IndexedSeq(G__29686__a,0);
} 
return G__29685__delegate.call(this,args);};
G__29685.cljs$lang$maxFixedArity = 0;
G__29685.cljs$lang$applyTo = (function (arglist__29687){
var args = cljs.core.seq(arglist__29687);
return G__29685__delegate(args);
});
G__29685.cljs$core$IFn$_invoke$arity$variadic = G__29685__delegate;
return G__29685;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29689 = cljs.core._EQ_;
var expr__29690 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29689.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29690))){
var path_parts = ((function (pred__29689,expr__29690){
return (function (p1__29688_SHARP_){
return clojure.string.split.call(null,p1__29688_SHARP_,/[\/\\]/);
});})(pred__29689,expr__29690))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29689,expr__29690){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29692){if((e29692 instanceof Error)){
var e = e29692;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29692;

}
}})());
});
;})(path_parts,sep,root,pred__29689,expr__29690))
} else {
if(cljs.core.truth_(pred__29689.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29690))){
return ((function (pred__29689,expr__29690){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__29689,expr__29690){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29689,expr__29690))
);

return deferred.addErrback(((function (deferred,pred__29689,expr__29690){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29689,expr__29690))
);
});
;})(pred__29689,expr__29690))
} else {
return ((function (pred__29689,expr__29690){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29689,expr__29690))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29693,callback){
var map__29696 = p__29693;
var map__29696__$1 = ((((!((map__29696 == null)))?((((map__29696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29696):map__29696);
var file_msg = map__29696__$1;
var request_url = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29696,map__29696__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29696,map__29696__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__){
return (function (state_29720){
var state_val_29721 = (state_29720[(1)]);
if((state_val_29721 === (7))){
var inst_29716 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29722_29742 = state_29720__$1;
(statearr_29722_29742[(2)] = inst_29716);

(statearr_29722_29742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (1))){
var state_29720__$1 = state_29720;
var statearr_29723_29743 = state_29720__$1;
(statearr_29723_29743[(2)] = null);

(statearr_29723_29743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (4))){
var inst_29700 = (state_29720[(7)]);
var inst_29700__$1 = (state_29720[(2)]);
var state_29720__$1 = (function (){var statearr_29724 = state_29720;
(statearr_29724[(7)] = inst_29700__$1);

return statearr_29724;
})();
if(cljs.core.truth_(inst_29700__$1)){
var statearr_29725_29744 = state_29720__$1;
(statearr_29725_29744[(1)] = (5));

} else {
var statearr_29726_29745 = state_29720__$1;
(statearr_29726_29745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (6))){
var state_29720__$1 = state_29720;
var statearr_29727_29746 = state_29720__$1;
(statearr_29727_29746[(2)] = null);

(statearr_29727_29746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (3))){
var inst_29718 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29720__$1,inst_29718);
} else {
if((state_val_29721 === (2))){
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29720__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29721 === (11))){
var inst_29712 = (state_29720[(2)]);
var state_29720__$1 = (function (){var statearr_29728 = state_29720;
(statearr_29728[(8)] = inst_29712);

return statearr_29728;
})();
var statearr_29729_29747 = state_29720__$1;
(statearr_29729_29747[(2)] = null);

(statearr_29729_29747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (9))){
var inst_29706 = (state_29720[(9)]);
var inst_29704 = (state_29720[(10)]);
var inst_29708 = inst_29706.call(null,inst_29704);
var state_29720__$1 = state_29720;
var statearr_29730_29748 = state_29720__$1;
(statearr_29730_29748[(2)] = inst_29708);

(statearr_29730_29748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (5))){
var inst_29700 = (state_29720[(7)]);
var inst_29702 = figwheel.client.file_reloading.blocking_load.call(null,inst_29700);
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29720__$1,(8),inst_29702);
} else {
if((state_val_29721 === (10))){
var inst_29704 = (state_29720[(10)]);
var inst_29710 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29704);
var state_29720__$1 = state_29720;
var statearr_29731_29749 = state_29720__$1;
(statearr_29731_29749[(2)] = inst_29710);

(statearr_29731_29749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (8))){
var inst_29706 = (state_29720[(9)]);
var inst_29700 = (state_29720[(7)]);
var inst_29704 = (state_29720[(2)]);
var inst_29705 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29706__$1 = cljs.core.get.call(null,inst_29705,inst_29700);
var state_29720__$1 = (function (){var statearr_29732 = state_29720;
(statearr_29732[(9)] = inst_29706__$1);

(statearr_29732[(10)] = inst_29704);

return statearr_29732;
})();
if(cljs.core.truth_(inst_29706__$1)){
var statearr_29733_29750 = state_29720__$1;
(statearr_29733_29750[(1)] = (9));

} else {
var statearr_29734_29751 = state_29720__$1;
(statearr_29734_29751[(1)] = (10));

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
});})(c__22533__auto__))
;
return ((function (switch__22421__auto__,c__22533__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22422__auto__ = null;
var figwheel$client$file_reloading$state_machine__22422__auto____0 = (function (){
var statearr_29738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29738[(0)] = figwheel$client$file_reloading$state_machine__22422__auto__);

(statearr_29738[(1)] = (1));

return statearr_29738;
});
var figwheel$client$file_reloading$state_machine__22422__auto____1 = (function (state_29720){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_29720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e29739){if((e29739 instanceof Object)){
var ex__22425__auto__ = e29739;
var statearr_29740_29752 = state_29720;
(statearr_29740_29752[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29753 = state_29720;
state_29720 = G__29753;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22422__auto__ = function(state_29720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22422__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22422__auto____1.call(this,state_29720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22422__auto____0;
figwheel$client$file_reloading$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22422__auto____1;
return figwheel$client$file_reloading$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__))
})();
var state__22535__auto__ = (function (){var statearr_29741 = f__22534__auto__.call(null);
(statearr_29741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_29741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__))
);

return c__22533__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29754,callback){
var map__29757 = p__29754;
var map__29757__$1 = ((((!((map__29757 == null)))?((((map__29757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29757):map__29757);
var file_msg = map__29757__$1;
var namespace = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29757,map__29757__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29757,map__29757__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29759){
var map__29762 = p__29759;
var map__29762__$1 = ((((!((map__29762 == null)))?((((map__29762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29762):map__29762);
var file_msg = map__29762__$1;
var namespace = cljs.core.get.call(null,map__29762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18704__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18704__auto__){
var or__18716__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
var or__18716__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18716__auto____$1)){
return or__18716__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18704__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29764,callback){
var map__29767 = p__29764;
var map__29767__$1 = ((((!((map__29767 == null)))?((((map__29767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29767):map__29767);
var file_msg = map__29767__$1;
var request_url = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22533__auto___29871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___29871,out){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___29871,out){
return (function (state_29853){
var state_val_29854 = (state_29853[(1)]);
if((state_val_29854 === (1))){
var inst_29827 = cljs.core.seq.call(null,files);
var inst_29828 = cljs.core.first.call(null,inst_29827);
var inst_29829 = cljs.core.next.call(null,inst_29827);
var inst_29830 = files;
var state_29853__$1 = (function (){var statearr_29855 = state_29853;
(statearr_29855[(7)] = inst_29829);

(statearr_29855[(8)] = inst_29828);

(statearr_29855[(9)] = inst_29830);

return statearr_29855;
})();
var statearr_29856_29872 = state_29853__$1;
(statearr_29856_29872[(2)] = null);

(statearr_29856_29872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (2))){
var inst_29836 = (state_29853[(10)]);
var inst_29830 = (state_29853[(9)]);
var inst_29835 = cljs.core.seq.call(null,inst_29830);
var inst_29836__$1 = cljs.core.first.call(null,inst_29835);
var inst_29837 = cljs.core.next.call(null,inst_29835);
var inst_29838 = (inst_29836__$1 == null);
var inst_29839 = cljs.core.not.call(null,inst_29838);
var state_29853__$1 = (function (){var statearr_29857 = state_29853;
(statearr_29857[(11)] = inst_29837);

(statearr_29857[(10)] = inst_29836__$1);

return statearr_29857;
})();
if(inst_29839){
var statearr_29858_29873 = state_29853__$1;
(statearr_29858_29873[(1)] = (4));

} else {
var statearr_29859_29874 = state_29853__$1;
(statearr_29859_29874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (3))){
var inst_29851 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29853__$1,inst_29851);
} else {
if((state_val_29854 === (4))){
var inst_29836 = (state_29853[(10)]);
var inst_29841 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29836);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29853__$1,(7),inst_29841);
} else {
if((state_val_29854 === (5))){
var inst_29847 = cljs.core.async.close_BANG_.call(null,out);
var state_29853__$1 = state_29853;
var statearr_29860_29875 = state_29853__$1;
(statearr_29860_29875[(2)] = inst_29847);

(statearr_29860_29875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (6))){
var inst_29849 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29861_29876 = state_29853__$1;
(statearr_29861_29876[(2)] = inst_29849);

(statearr_29861_29876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (7))){
var inst_29837 = (state_29853[(11)]);
var inst_29843 = (state_29853[(2)]);
var inst_29844 = cljs.core.async.put_BANG_.call(null,out,inst_29843);
var inst_29830 = inst_29837;
var state_29853__$1 = (function (){var statearr_29862 = state_29853;
(statearr_29862[(12)] = inst_29844);

(statearr_29862[(9)] = inst_29830);

return statearr_29862;
})();
var statearr_29863_29877 = state_29853__$1;
(statearr_29863_29877[(2)] = null);

(statearr_29863_29877[(1)] = (2));


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
});})(c__22533__auto___29871,out))
;
return ((function (switch__22421__auto__,c__22533__auto___29871,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto____0 = (function (){
var statearr_29867 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29867[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto__);

(statearr_29867[(1)] = (1));

return statearr_29867;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto____1 = (function (state_29853){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_29853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e29868){if((e29868 instanceof Object)){
var ex__22425__auto__ = e29868;
var statearr_29869_29878 = state_29853;
(statearr_29869_29878[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29879 = state_29853;
state_29853 = G__29879;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto__ = function(state_29853){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto____1.call(this,state_29853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___29871,out))
})();
var state__22535__auto__ = (function (){var statearr_29870 = f__22534__auto__.call(null);
(statearr_29870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___29871);

return statearr_29870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___29871,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29880,opts){
var map__29884 = p__29880;
var map__29884__$1 = ((((!((map__29884 == null)))?((((map__29884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29884):map__29884);
var eval_body__$1 = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18704__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18704__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18704__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29886){var e = e29886;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29887_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29887_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__29896){
var vec__29897 = p__29896;
var k = cljs.core.nth.call(null,vec__29897,(0),null);
var v = cljs.core.nth.call(null,vec__29897,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29900){
var vec__29901 = p__29900;
var k = cljs.core.nth.call(null,vec__29901,(0),null);
var v = cljs.core.nth.call(null,vec__29901,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29907,p__29908){
var map__30155 = p__29907;
var map__30155__$1 = ((((!((map__30155 == null)))?((((map__30155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30155):map__30155);
var opts = map__30155__$1;
var before_jsload = cljs.core.get.call(null,map__30155__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30155__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30155__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30156 = p__29908;
var map__30156__$1 = ((((!((map__30156 == null)))?((((map__30156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30156):map__30156);
var msg = map__30156__$1;
var files = cljs.core.get.call(null,map__30156__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30156__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30156__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30309){
var state_val_30310 = (state_30309[(1)]);
if((state_val_30310 === (7))){
var inst_30170 = (state_30309[(7)]);
var inst_30173 = (state_30309[(8)]);
var inst_30172 = (state_30309[(9)]);
var inst_30171 = (state_30309[(10)]);
var inst_30178 = cljs.core._nth.call(null,inst_30171,inst_30173);
var inst_30179 = figwheel.client.file_reloading.eval_body.call(null,inst_30178,opts);
var inst_30180 = (inst_30173 + (1));
var tmp30311 = inst_30170;
var tmp30312 = inst_30172;
var tmp30313 = inst_30171;
var inst_30170__$1 = tmp30311;
var inst_30171__$1 = tmp30313;
var inst_30172__$1 = tmp30312;
var inst_30173__$1 = inst_30180;
var state_30309__$1 = (function (){var statearr_30314 = state_30309;
(statearr_30314[(7)] = inst_30170__$1);

(statearr_30314[(8)] = inst_30173__$1);

(statearr_30314[(9)] = inst_30172__$1);

(statearr_30314[(10)] = inst_30171__$1);

(statearr_30314[(11)] = inst_30179);

return statearr_30314;
})();
var statearr_30315_30401 = state_30309__$1;
(statearr_30315_30401[(2)] = null);

(statearr_30315_30401[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (20))){
var inst_30213 = (state_30309[(12)]);
var inst_30221 = figwheel.client.file_reloading.sort_files.call(null,inst_30213);
var state_30309__$1 = state_30309;
var statearr_30316_30402 = state_30309__$1;
(statearr_30316_30402[(2)] = inst_30221);

(statearr_30316_30402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (27))){
var state_30309__$1 = state_30309;
var statearr_30317_30403 = state_30309__$1;
(statearr_30317_30403[(2)] = null);

(statearr_30317_30403[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (1))){
var inst_30162 = (state_30309[(13)]);
var inst_30159 = before_jsload.call(null,files);
var inst_30160 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30161 = (function (){return ((function (inst_30162,inst_30159,inst_30160,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29904_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29904_SHARP_);
});
;})(inst_30162,inst_30159,inst_30160,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30162__$1 = cljs.core.filter.call(null,inst_30161,files);
var inst_30163 = cljs.core.not_empty.call(null,inst_30162__$1);
var state_30309__$1 = (function (){var statearr_30318 = state_30309;
(statearr_30318[(14)] = inst_30159);

(statearr_30318[(15)] = inst_30160);

(statearr_30318[(13)] = inst_30162__$1);

return statearr_30318;
})();
if(cljs.core.truth_(inst_30163)){
var statearr_30319_30404 = state_30309__$1;
(statearr_30319_30404[(1)] = (2));

} else {
var statearr_30320_30405 = state_30309__$1;
(statearr_30320_30405[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (24))){
var state_30309__$1 = state_30309;
var statearr_30321_30406 = state_30309__$1;
(statearr_30321_30406[(2)] = null);

(statearr_30321_30406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (39))){
var inst_30263 = (state_30309[(16)]);
var state_30309__$1 = state_30309;
var statearr_30322_30407 = state_30309__$1;
(statearr_30322_30407[(2)] = inst_30263);

(statearr_30322_30407[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (46))){
var inst_30304 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30323_30408 = state_30309__$1;
(statearr_30323_30408[(2)] = inst_30304);

(statearr_30323_30408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (4))){
var inst_30207 = (state_30309[(2)]);
var inst_30208 = cljs.core.List.EMPTY;
var inst_30209 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30208);
var inst_30210 = (function (){return ((function (inst_30207,inst_30208,inst_30209,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29905_SHARP_){
var and__18704__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29905_SHARP_);
if(cljs.core.truth_(and__18704__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29905_SHARP_));
} else {
return and__18704__auto__;
}
});
;})(inst_30207,inst_30208,inst_30209,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30211 = cljs.core.filter.call(null,inst_30210,files);
var inst_30212 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30213 = cljs.core.concat.call(null,inst_30211,inst_30212);
var state_30309__$1 = (function (){var statearr_30324 = state_30309;
(statearr_30324[(17)] = inst_30209);

(statearr_30324[(18)] = inst_30207);

(statearr_30324[(12)] = inst_30213);

return statearr_30324;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30325_30409 = state_30309__$1;
(statearr_30325_30409[(1)] = (16));

} else {
var statearr_30326_30410 = state_30309__$1;
(statearr_30326_30410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (15))){
var inst_30197 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30327_30411 = state_30309__$1;
(statearr_30327_30411[(2)] = inst_30197);

(statearr_30327_30411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (21))){
var inst_30223 = (state_30309[(19)]);
var inst_30223__$1 = (state_30309[(2)]);
var inst_30224 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30223__$1);
var state_30309__$1 = (function (){var statearr_30328 = state_30309;
(statearr_30328[(19)] = inst_30223__$1);

return statearr_30328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30309__$1,(22),inst_30224);
} else {
if((state_val_30310 === (31))){
var inst_30307 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30309__$1,inst_30307);
} else {
if((state_val_30310 === (32))){
var inst_30263 = (state_30309[(16)]);
var inst_30268 = inst_30263.cljs$lang$protocol_mask$partition0$;
var inst_30269 = (inst_30268 & (64));
var inst_30270 = inst_30263.cljs$core$ISeq$;
var inst_30271 = (inst_30269) || (inst_30270);
var state_30309__$1 = state_30309;
if(cljs.core.truth_(inst_30271)){
var statearr_30329_30412 = state_30309__$1;
(statearr_30329_30412[(1)] = (35));

} else {
var statearr_30330_30413 = state_30309__$1;
(statearr_30330_30413[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (40))){
var inst_30284 = (state_30309[(20)]);
var inst_30283 = (state_30309[(2)]);
var inst_30284__$1 = cljs.core.get.call(null,inst_30283,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30285 = cljs.core.get.call(null,inst_30283,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30286 = cljs.core.not_empty.call(null,inst_30284__$1);
var state_30309__$1 = (function (){var statearr_30331 = state_30309;
(statearr_30331[(21)] = inst_30285);

(statearr_30331[(20)] = inst_30284__$1);

return statearr_30331;
})();
if(cljs.core.truth_(inst_30286)){
var statearr_30332_30414 = state_30309__$1;
(statearr_30332_30414[(1)] = (41));

} else {
var statearr_30333_30415 = state_30309__$1;
(statearr_30333_30415[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (33))){
var state_30309__$1 = state_30309;
var statearr_30334_30416 = state_30309__$1;
(statearr_30334_30416[(2)] = false);

(statearr_30334_30416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (13))){
var inst_30183 = (state_30309[(22)]);
var inst_30187 = cljs.core.chunk_first.call(null,inst_30183);
var inst_30188 = cljs.core.chunk_rest.call(null,inst_30183);
var inst_30189 = cljs.core.count.call(null,inst_30187);
var inst_30170 = inst_30188;
var inst_30171 = inst_30187;
var inst_30172 = inst_30189;
var inst_30173 = (0);
var state_30309__$1 = (function (){var statearr_30335 = state_30309;
(statearr_30335[(7)] = inst_30170);

(statearr_30335[(8)] = inst_30173);

(statearr_30335[(9)] = inst_30172);

(statearr_30335[(10)] = inst_30171);

return statearr_30335;
})();
var statearr_30336_30417 = state_30309__$1;
(statearr_30336_30417[(2)] = null);

(statearr_30336_30417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (22))){
var inst_30227 = (state_30309[(23)]);
var inst_30231 = (state_30309[(24)]);
var inst_30223 = (state_30309[(19)]);
var inst_30226 = (state_30309[(25)]);
var inst_30226__$1 = (state_30309[(2)]);
var inst_30227__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30226__$1);
var inst_30228 = (function (){var all_files = inst_30223;
var res_SINGLEQUOTE_ = inst_30226__$1;
var res = inst_30227__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30227,inst_30231,inst_30223,inst_30226,inst_30226__$1,inst_30227__$1,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29906_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29906_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30227,inst_30231,inst_30223,inst_30226,inst_30226__$1,inst_30227__$1,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30229 = cljs.core.filter.call(null,inst_30228,inst_30226__$1);
var inst_30230 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30231__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30230);
var inst_30232 = cljs.core.not_empty.call(null,inst_30231__$1);
var state_30309__$1 = (function (){var statearr_30337 = state_30309;
(statearr_30337[(23)] = inst_30227__$1);

(statearr_30337[(24)] = inst_30231__$1);

(statearr_30337[(26)] = inst_30229);

(statearr_30337[(25)] = inst_30226__$1);

return statearr_30337;
})();
if(cljs.core.truth_(inst_30232)){
var statearr_30338_30418 = state_30309__$1;
(statearr_30338_30418[(1)] = (23));

} else {
var statearr_30339_30419 = state_30309__$1;
(statearr_30339_30419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (36))){
var state_30309__$1 = state_30309;
var statearr_30340_30420 = state_30309__$1;
(statearr_30340_30420[(2)] = false);

(statearr_30340_30420[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (41))){
var inst_30284 = (state_30309[(20)]);
var inst_30288 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30289 = cljs.core.map.call(null,inst_30288,inst_30284);
var inst_30290 = cljs.core.pr_str.call(null,inst_30289);
var inst_30291 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30290)].join('');
var inst_30292 = figwheel.client.utils.log.call(null,inst_30291);
var state_30309__$1 = state_30309;
var statearr_30341_30421 = state_30309__$1;
(statearr_30341_30421[(2)] = inst_30292);

(statearr_30341_30421[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (43))){
var inst_30285 = (state_30309[(21)]);
var inst_30295 = (state_30309[(2)]);
var inst_30296 = cljs.core.not_empty.call(null,inst_30285);
var state_30309__$1 = (function (){var statearr_30342 = state_30309;
(statearr_30342[(27)] = inst_30295);

return statearr_30342;
})();
if(cljs.core.truth_(inst_30296)){
var statearr_30343_30422 = state_30309__$1;
(statearr_30343_30422[(1)] = (44));

} else {
var statearr_30344_30423 = state_30309__$1;
(statearr_30344_30423[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (29))){
var inst_30227 = (state_30309[(23)]);
var inst_30231 = (state_30309[(24)]);
var inst_30263 = (state_30309[(16)]);
var inst_30229 = (state_30309[(26)]);
var inst_30223 = (state_30309[(19)]);
var inst_30226 = (state_30309[(25)]);
var inst_30259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30262 = (function (){var all_files = inst_30223;
var res_SINGLEQUOTE_ = inst_30226;
var res = inst_30227;
var files_not_loaded = inst_30229;
var dependencies_that_loaded = inst_30231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30263,inst_30229,inst_30223,inst_30226,inst_30259,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30261){
var map__30345 = p__30261;
var map__30345__$1 = ((((!((map__30345 == null)))?((((map__30345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345):map__30345);
var namespace = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30263,inst_30229,inst_30223,inst_30226,inst_30259,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30263__$1 = cljs.core.group_by.call(null,inst_30262,inst_30229);
var inst_30265 = (inst_30263__$1 == null);
var inst_30266 = cljs.core.not.call(null,inst_30265);
var state_30309__$1 = (function (){var statearr_30347 = state_30309;
(statearr_30347[(28)] = inst_30259);

(statearr_30347[(16)] = inst_30263__$1);

return statearr_30347;
})();
if(inst_30266){
var statearr_30348_30424 = state_30309__$1;
(statearr_30348_30424[(1)] = (32));

} else {
var statearr_30349_30425 = state_30309__$1;
(statearr_30349_30425[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (44))){
var inst_30285 = (state_30309[(21)]);
var inst_30298 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30285);
var inst_30299 = cljs.core.pr_str.call(null,inst_30298);
var inst_30300 = [cljs.core.str("not required: "),cljs.core.str(inst_30299)].join('');
var inst_30301 = figwheel.client.utils.log.call(null,inst_30300);
var state_30309__$1 = state_30309;
var statearr_30350_30426 = state_30309__$1;
(statearr_30350_30426[(2)] = inst_30301);

(statearr_30350_30426[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (6))){
var inst_30204 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30351_30427 = state_30309__$1;
(statearr_30351_30427[(2)] = inst_30204);

(statearr_30351_30427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (28))){
var inst_30229 = (state_30309[(26)]);
var inst_30256 = (state_30309[(2)]);
var inst_30257 = cljs.core.not_empty.call(null,inst_30229);
var state_30309__$1 = (function (){var statearr_30352 = state_30309;
(statearr_30352[(29)] = inst_30256);

return statearr_30352;
})();
if(cljs.core.truth_(inst_30257)){
var statearr_30353_30428 = state_30309__$1;
(statearr_30353_30428[(1)] = (29));

} else {
var statearr_30354_30429 = state_30309__$1;
(statearr_30354_30429[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (25))){
var inst_30227 = (state_30309[(23)]);
var inst_30243 = (state_30309[(2)]);
var inst_30244 = cljs.core.not_empty.call(null,inst_30227);
var state_30309__$1 = (function (){var statearr_30355 = state_30309;
(statearr_30355[(30)] = inst_30243);

return statearr_30355;
})();
if(cljs.core.truth_(inst_30244)){
var statearr_30356_30430 = state_30309__$1;
(statearr_30356_30430[(1)] = (26));

} else {
var statearr_30357_30431 = state_30309__$1;
(statearr_30357_30431[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (34))){
var inst_30278 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
if(cljs.core.truth_(inst_30278)){
var statearr_30358_30432 = state_30309__$1;
(statearr_30358_30432[(1)] = (38));

} else {
var statearr_30359_30433 = state_30309__$1;
(statearr_30359_30433[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (17))){
var state_30309__$1 = state_30309;
var statearr_30360_30434 = state_30309__$1;
(statearr_30360_30434[(2)] = recompile_dependents);

(statearr_30360_30434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (3))){
var state_30309__$1 = state_30309;
var statearr_30361_30435 = state_30309__$1;
(statearr_30361_30435[(2)] = null);

(statearr_30361_30435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (12))){
var inst_30200 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30362_30436 = state_30309__$1;
(statearr_30362_30436[(2)] = inst_30200);

(statearr_30362_30436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (2))){
var inst_30162 = (state_30309[(13)]);
var inst_30169 = cljs.core.seq.call(null,inst_30162);
var inst_30170 = inst_30169;
var inst_30171 = null;
var inst_30172 = (0);
var inst_30173 = (0);
var state_30309__$1 = (function (){var statearr_30363 = state_30309;
(statearr_30363[(7)] = inst_30170);

(statearr_30363[(8)] = inst_30173);

(statearr_30363[(9)] = inst_30172);

(statearr_30363[(10)] = inst_30171);

return statearr_30363;
})();
var statearr_30364_30437 = state_30309__$1;
(statearr_30364_30437[(2)] = null);

(statearr_30364_30437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (23))){
var inst_30227 = (state_30309[(23)]);
var inst_30231 = (state_30309[(24)]);
var inst_30229 = (state_30309[(26)]);
var inst_30223 = (state_30309[(19)]);
var inst_30226 = (state_30309[(25)]);
var inst_30234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30236 = (function (){var all_files = inst_30223;
var res_SINGLEQUOTE_ = inst_30226;
var res = inst_30227;
var files_not_loaded = inst_30229;
var dependencies_that_loaded = inst_30231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30229,inst_30223,inst_30226,inst_30234,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30235){
var map__30365 = p__30235;
var map__30365__$1 = ((((!((map__30365 == null)))?((((map__30365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30365):map__30365);
var request_url = cljs.core.get.call(null,map__30365__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30229,inst_30223,inst_30226,inst_30234,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30237 = cljs.core.reverse.call(null,inst_30231);
var inst_30238 = cljs.core.map.call(null,inst_30236,inst_30237);
var inst_30239 = cljs.core.pr_str.call(null,inst_30238);
var inst_30240 = figwheel.client.utils.log.call(null,inst_30239);
var state_30309__$1 = (function (){var statearr_30367 = state_30309;
(statearr_30367[(31)] = inst_30234);

return statearr_30367;
})();
var statearr_30368_30438 = state_30309__$1;
(statearr_30368_30438[(2)] = inst_30240);

(statearr_30368_30438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (35))){
var state_30309__$1 = state_30309;
var statearr_30369_30439 = state_30309__$1;
(statearr_30369_30439[(2)] = true);

(statearr_30369_30439[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (19))){
var inst_30213 = (state_30309[(12)]);
var inst_30219 = figwheel.client.file_reloading.expand_files.call(null,inst_30213);
var state_30309__$1 = state_30309;
var statearr_30370_30440 = state_30309__$1;
(statearr_30370_30440[(2)] = inst_30219);

(statearr_30370_30440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (11))){
var state_30309__$1 = state_30309;
var statearr_30371_30441 = state_30309__$1;
(statearr_30371_30441[(2)] = null);

(statearr_30371_30441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (9))){
var inst_30202 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30372_30442 = state_30309__$1;
(statearr_30372_30442[(2)] = inst_30202);

(statearr_30372_30442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (5))){
var inst_30173 = (state_30309[(8)]);
var inst_30172 = (state_30309[(9)]);
var inst_30175 = (inst_30173 < inst_30172);
var inst_30176 = inst_30175;
var state_30309__$1 = state_30309;
if(cljs.core.truth_(inst_30176)){
var statearr_30373_30443 = state_30309__$1;
(statearr_30373_30443[(1)] = (7));

} else {
var statearr_30374_30444 = state_30309__$1;
(statearr_30374_30444[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (14))){
var inst_30183 = (state_30309[(22)]);
var inst_30192 = cljs.core.first.call(null,inst_30183);
var inst_30193 = figwheel.client.file_reloading.eval_body.call(null,inst_30192,opts);
var inst_30194 = cljs.core.next.call(null,inst_30183);
var inst_30170 = inst_30194;
var inst_30171 = null;
var inst_30172 = (0);
var inst_30173 = (0);
var state_30309__$1 = (function (){var statearr_30375 = state_30309;
(statearr_30375[(7)] = inst_30170);

(statearr_30375[(32)] = inst_30193);

(statearr_30375[(8)] = inst_30173);

(statearr_30375[(9)] = inst_30172);

(statearr_30375[(10)] = inst_30171);

return statearr_30375;
})();
var statearr_30376_30445 = state_30309__$1;
(statearr_30376_30445[(2)] = null);

(statearr_30376_30445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (45))){
var state_30309__$1 = state_30309;
var statearr_30377_30446 = state_30309__$1;
(statearr_30377_30446[(2)] = null);

(statearr_30377_30446[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (26))){
var inst_30227 = (state_30309[(23)]);
var inst_30231 = (state_30309[(24)]);
var inst_30229 = (state_30309[(26)]);
var inst_30223 = (state_30309[(19)]);
var inst_30226 = (state_30309[(25)]);
var inst_30246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30248 = (function (){var all_files = inst_30223;
var res_SINGLEQUOTE_ = inst_30226;
var res = inst_30227;
var files_not_loaded = inst_30229;
var dependencies_that_loaded = inst_30231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30229,inst_30223,inst_30226,inst_30246,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30247){
var map__30378 = p__30247;
var map__30378__$1 = ((((!((map__30378 == null)))?((((map__30378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30378):map__30378);
var namespace = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30229,inst_30223,inst_30226,inst_30246,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30249 = cljs.core.map.call(null,inst_30248,inst_30227);
var inst_30250 = cljs.core.pr_str.call(null,inst_30249);
var inst_30251 = figwheel.client.utils.log.call(null,inst_30250);
var inst_30252 = (function (){var all_files = inst_30223;
var res_SINGLEQUOTE_ = inst_30226;
var res = inst_30227;
var files_not_loaded = inst_30229;
var dependencies_that_loaded = inst_30231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30229,inst_30223,inst_30226,inst_30246,inst_30248,inst_30249,inst_30250,inst_30251,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30227,inst_30231,inst_30229,inst_30223,inst_30226,inst_30246,inst_30248,inst_30249,inst_30250,inst_30251,state_val_30310,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30253 = setTimeout(inst_30252,(10));
var state_30309__$1 = (function (){var statearr_30380 = state_30309;
(statearr_30380[(33)] = inst_30251);

(statearr_30380[(34)] = inst_30246);

return statearr_30380;
})();
var statearr_30381_30447 = state_30309__$1;
(statearr_30381_30447[(2)] = inst_30253);

(statearr_30381_30447[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (16))){
var state_30309__$1 = state_30309;
var statearr_30382_30448 = state_30309__$1;
(statearr_30382_30448[(2)] = reload_dependents);

(statearr_30382_30448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (38))){
var inst_30263 = (state_30309[(16)]);
var inst_30280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30263);
var state_30309__$1 = state_30309;
var statearr_30383_30449 = state_30309__$1;
(statearr_30383_30449[(2)] = inst_30280);

(statearr_30383_30449[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (30))){
var state_30309__$1 = state_30309;
var statearr_30384_30450 = state_30309__$1;
(statearr_30384_30450[(2)] = null);

(statearr_30384_30450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (10))){
var inst_30183 = (state_30309[(22)]);
var inst_30185 = cljs.core.chunked_seq_QMARK_.call(null,inst_30183);
var state_30309__$1 = state_30309;
if(inst_30185){
var statearr_30385_30451 = state_30309__$1;
(statearr_30385_30451[(1)] = (13));

} else {
var statearr_30386_30452 = state_30309__$1;
(statearr_30386_30452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (18))){
var inst_30217 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
if(cljs.core.truth_(inst_30217)){
var statearr_30387_30453 = state_30309__$1;
(statearr_30387_30453[(1)] = (19));

} else {
var statearr_30388_30454 = state_30309__$1;
(statearr_30388_30454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (42))){
var state_30309__$1 = state_30309;
var statearr_30389_30455 = state_30309__$1;
(statearr_30389_30455[(2)] = null);

(statearr_30389_30455[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (37))){
var inst_30275 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30390_30456 = state_30309__$1;
(statearr_30390_30456[(2)] = inst_30275);

(statearr_30390_30456[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (8))){
var inst_30170 = (state_30309[(7)]);
var inst_30183 = (state_30309[(22)]);
var inst_30183__$1 = cljs.core.seq.call(null,inst_30170);
var state_30309__$1 = (function (){var statearr_30391 = state_30309;
(statearr_30391[(22)] = inst_30183__$1);

return statearr_30391;
})();
if(inst_30183__$1){
var statearr_30392_30457 = state_30309__$1;
(statearr_30392_30457[(1)] = (10));

} else {
var statearr_30393_30458 = state_30309__$1;
(statearr_30393_30458[(1)] = (11));

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
});})(c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22421__auto__,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto____0 = (function (){
var statearr_30397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30397[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto__);

(statearr_30397[(1)] = (1));

return statearr_30397;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto____1 = (function (state_30309){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_30309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e30398){if((e30398 instanceof Object)){
var ex__22425__auto__ = e30398;
var statearr_30399_30459 = state_30309;
(statearr_30399_30459[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30460 = state_30309;
state_30309 = G__30460;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto__ = function(state_30309){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto____1.call(this,state_30309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22535__auto__ = (function (){var statearr_30400 = f__22534__auto__.call(null);
(statearr_30400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__,map__30155,map__30155__$1,opts,before_jsload,on_jsload,reload_dependents,map__30156,map__30156__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22533__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30463,link){
var map__30466 = p__30463;
var map__30466__$1 = ((((!((map__30466 == null)))?((((map__30466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30466):map__30466);
var file = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30466,map__30466__$1,file){
return (function (p1__30461_SHARP_,p2__30462_SHARP_){
if(cljs.core._EQ_.call(null,p1__30461_SHARP_,p2__30462_SHARP_)){
return p1__30461_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30466,map__30466__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30472){
var map__30473 = p__30472;
var map__30473__$1 = ((((!((map__30473 == null)))?((((map__30473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30473):map__30473);
var match_length = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30468_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30468_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args30475 = [];
var len__19791__auto___30478 = arguments.length;
var i__19792__auto___30479 = (0);
while(true){
if((i__19792__auto___30479 < len__19791__auto___30478)){
args30475.push((arguments[i__19792__auto___30479]));

var G__30480 = (i__19792__auto___30479 + (1));
i__19792__auto___30479 = G__30480;
continue;
} else {
}
break;
}

var G__30477 = args30475.length;
switch (G__30477) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30475.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30482_SHARP_,p2__30483_SHARP_){
return cljs.core.assoc.call(null,p1__30482_SHARP_,cljs.core.get.call(null,p2__30483_SHARP_,key),p2__30483_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30484){
var map__30487 = p__30484;
var map__30487__$1 = ((((!((map__30487 == null)))?((((map__30487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30487):map__30487);
var f_data = map__30487__$1;
var file = cljs.core.get.call(null,map__30487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30489,files_msg){
var map__30496 = p__30489;
var map__30496__$1 = ((((!((map__30496 == null)))?((((map__30496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30496):map__30496);
var opts = map__30496__$1;
var on_cssload = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30498_30502 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30499_30503 = null;
var count__30500_30504 = (0);
var i__30501_30505 = (0);
while(true){
if((i__30501_30505 < count__30500_30504)){
var f_30506 = cljs.core._nth.call(null,chunk__30499_30503,i__30501_30505);
figwheel.client.file_reloading.reload_css_file.call(null,f_30506);

var G__30507 = seq__30498_30502;
var G__30508 = chunk__30499_30503;
var G__30509 = count__30500_30504;
var G__30510 = (i__30501_30505 + (1));
seq__30498_30502 = G__30507;
chunk__30499_30503 = G__30508;
count__30500_30504 = G__30509;
i__30501_30505 = G__30510;
continue;
} else {
var temp__4657__auto___30511 = cljs.core.seq.call(null,seq__30498_30502);
if(temp__4657__auto___30511){
var seq__30498_30512__$1 = temp__4657__auto___30511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30498_30512__$1)){
var c__19527__auto___30513 = cljs.core.chunk_first.call(null,seq__30498_30512__$1);
var G__30514 = cljs.core.chunk_rest.call(null,seq__30498_30512__$1);
var G__30515 = c__19527__auto___30513;
var G__30516 = cljs.core.count.call(null,c__19527__auto___30513);
var G__30517 = (0);
seq__30498_30502 = G__30514;
chunk__30499_30503 = G__30515;
count__30500_30504 = G__30516;
i__30501_30505 = G__30517;
continue;
} else {
var f_30518 = cljs.core.first.call(null,seq__30498_30512__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30518);

var G__30519 = cljs.core.next.call(null,seq__30498_30512__$1);
var G__30520 = null;
var G__30521 = (0);
var G__30522 = (0);
seq__30498_30502 = G__30519;
chunk__30499_30503 = G__30520;
count__30500_30504 = G__30521;
i__30501_30505 = G__30522;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30496,map__30496__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30496,map__30496__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1474300069573