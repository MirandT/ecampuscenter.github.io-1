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
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24760__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24760__auto__){
return or__24760__auto__;
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
var or__24760__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36472_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36472_SHARP_));
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
var seq__36477 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36478 = null;
var count__36479 = (0);
var i__36480 = (0);
while(true){
if((i__36480 < count__36479)){
var n = cljs.core._nth.call(null,chunk__36478,i__36480);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36481 = seq__36477;
var G__36482 = chunk__36478;
var G__36483 = count__36479;
var G__36484 = (i__36480 + (1));
seq__36477 = G__36481;
chunk__36478 = G__36482;
count__36479 = G__36483;
i__36480 = G__36484;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36477);
if(temp__4657__auto__){
var seq__36477__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36477__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__36477__$1);
var G__36485 = cljs.core.chunk_rest.call(null,seq__36477__$1);
var G__36486 = c__25571__auto__;
var G__36487 = cljs.core.count.call(null,c__25571__auto__);
var G__36488 = (0);
seq__36477 = G__36485;
chunk__36478 = G__36486;
count__36479 = G__36487;
i__36480 = G__36488;
continue;
} else {
var n = cljs.core.first.call(null,seq__36477__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36489 = cljs.core.next.call(null,seq__36477__$1);
var G__36490 = null;
var G__36491 = (0);
var G__36492 = (0);
seq__36477 = G__36489;
chunk__36478 = G__36490;
count__36479 = G__36491;
i__36480 = G__36492;
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

var seq__36543_36554 = cljs.core.seq.call(null,deps);
var chunk__36544_36555 = null;
var count__36545_36556 = (0);
var i__36546_36557 = (0);
while(true){
if((i__36546_36557 < count__36545_36556)){
var dep_36558 = cljs.core._nth.call(null,chunk__36544_36555,i__36546_36557);
topo_sort_helper_STAR_.call(null,dep_36558,(depth + (1)),state);

var G__36559 = seq__36543_36554;
var G__36560 = chunk__36544_36555;
var G__36561 = count__36545_36556;
var G__36562 = (i__36546_36557 + (1));
seq__36543_36554 = G__36559;
chunk__36544_36555 = G__36560;
count__36545_36556 = G__36561;
i__36546_36557 = G__36562;
continue;
} else {
var temp__4657__auto___36563 = cljs.core.seq.call(null,seq__36543_36554);
if(temp__4657__auto___36563){
var seq__36543_36564__$1 = temp__4657__auto___36563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36543_36564__$1)){
var c__25571__auto___36565 = cljs.core.chunk_first.call(null,seq__36543_36564__$1);
var G__36566 = cljs.core.chunk_rest.call(null,seq__36543_36564__$1);
var G__36567 = c__25571__auto___36565;
var G__36568 = cljs.core.count.call(null,c__25571__auto___36565);
var G__36569 = (0);
seq__36543_36554 = G__36566;
chunk__36544_36555 = G__36567;
count__36545_36556 = G__36568;
i__36546_36557 = G__36569;
continue;
} else {
var dep_36570 = cljs.core.first.call(null,seq__36543_36564__$1);
topo_sort_helper_STAR_.call(null,dep_36570,(depth + (1)),state);

var G__36571 = cljs.core.next.call(null,seq__36543_36564__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__36543_36554 = G__36571;
chunk__36544_36555 = G__36572;
count__36545_36556 = G__36573;
i__36546_36557 = G__36574;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36547){
var vec__36551 = p__36547;
var seq__36552 = cljs.core.seq.call(null,vec__36551);
var first__36553 = cljs.core.first.call(null,seq__36552);
var seq__36552__$1 = cljs.core.next.call(null,seq__36552);
var x = first__36553;
var xs = seq__36552__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36551,seq__36552,first__36553,seq__36552__$1,x,xs,get_deps__$1){
return (function (p1__36493_SHARP_){
return clojure.set.difference.call(null,p1__36493_SHARP_,x);
});})(vec__36551,seq__36552,first__36553,seq__36552__$1,x,xs,get_deps__$1))
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
var seq__36587 = cljs.core.seq.call(null,provides);
var chunk__36588 = null;
var count__36589 = (0);
var i__36590 = (0);
while(true){
if((i__36590 < count__36589)){
var prov = cljs.core._nth.call(null,chunk__36588,i__36590);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36591_36599 = cljs.core.seq.call(null,requires);
var chunk__36592_36600 = null;
var count__36593_36601 = (0);
var i__36594_36602 = (0);
while(true){
if((i__36594_36602 < count__36593_36601)){
var req_36603 = cljs.core._nth.call(null,chunk__36592_36600,i__36594_36602);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36603,prov);

var G__36604 = seq__36591_36599;
var G__36605 = chunk__36592_36600;
var G__36606 = count__36593_36601;
var G__36607 = (i__36594_36602 + (1));
seq__36591_36599 = G__36604;
chunk__36592_36600 = G__36605;
count__36593_36601 = G__36606;
i__36594_36602 = G__36607;
continue;
} else {
var temp__4657__auto___36608 = cljs.core.seq.call(null,seq__36591_36599);
if(temp__4657__auto___36608){
var seq__36591_36609__$1 = temp__4657__auto___36608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36591_36609__$1)){
var c__25571__auto___36610 = cljs.core.chunk_first.call(null,seq__36591_36609__$1);
var G__36611 = cljs.core.chunk_rest.call(null,seq__36591_36609__$1);
var G__36612 = c__25571__auto___36610;
var G__36613 = cljs.core.count.call(null,c__25571__auto___36610);
var G__36614 = (0);
seq__36591_36599 = G__36611;
chunk__36592_36600 = G__36612;
count__36593_36601 = G__36613;
i__36594_36602 = G__36614;
continue;
} else {
var req_36615 = cljs.core.first.call(null,seq__36591_36609__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36615,prov);

var G__36616 = cljs.core.next.call(null,seq__36591_36609__$1);
var G__36617 = null;
var G__36618 = (0);
var G__36619 = (0);
seq__36591_36599 = G__36616;
chunk__36592_36600 = G__36617;
count__36593_36601 = G__36618;
i__36594_36602 = G__36619;
continue;
}
} else {
}
}
break;
}

var G__36620 = seq__36587;
var G__36621 = chunk__36588;
var G__36622 = count__36589;
var G__36623 = (i__36590 + (1));
seq__36587 = G__36620;
chunk__36588 = G__36621;
count__36589 = G__36622;
i__36590 = G__36623;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36587);
if(temp__4657__auto__){
var seq__36587__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36587__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__36587__$1);
var G__36624 = cljs.core.chunk_rest.call(null,seq__36587__$1);
var G__36625 = c__25571__auto__;
var G__36626 = cljs.core.count.call(null,c__25571__auto__);
var G__36627 = (0);
seq__36587 = G__36624;
chunk__36588 = G__36625;
count__36589 = G__36626;
i__36590 = G__36627;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36587__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36595_36628 = cljs.core.seq.call(null,requires);
var chunk__36596_36629 = null;
var count__36597_36630 = (0);
var i__36598_36631 = (0);
while(true){
if((i__36598_36631 < count__36597_36630)){
var req_36632 = cljs.core._nth.call(null,chunk__36596_36629,i__36598_36631);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36632,prov);

var G__36633 = seq__36595_36628;
var G__36634 = chunk__36596_36629;
var G__36635 = count__36597_36630;
var G__36636 = (i__36598_36631 + (1));
seq__36595_36628 = G__36633;
chunk__36596_36629 = G__36634;
count__36597_36630 = G__36635;
i__36598_36631 = G__36636;
continue;
} else {
var temp__4657__auto___36637__$1 = cljs.core.seq.call(null,seq__36595_36628);
if(temp__4657__auto___36637__$1){
var seq__36595_36638__$1 = temp__4657__auto___36637__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36595_36638__$1)){
var c__25571__auto___36639 = cljs.core.chunk_first.call(null,seq__36595_36638__$1);
var G__36640 = cljs.core.chunk_rest.call(null,seq__36595_36638__$1);
var G__36641 = c__25571__auto___36639;
var G__36642 = cljs.core.count.call(null,c__25571__auto___36639);
var G__36643 = (0);
seq__36595_36628 = G__36640;
chunk__36596_36629 = G__36641;
count__36597_36630 = G__36642;
i__36598_36631 = G__36643;
continue;
} else {
var req_36644 = cljs.core.first.call(null,seq__36595_36638__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36644,prov);

var G__36645 = cljs.core.next.call(null,seq__36595_36638__$1);
var G__36646 = null;
var G__36647 = (0);
var G__36648 = (0);
seq__36595_36628 = G__36645;
chunk__36596_36629 = G__36646;
count__36597_36630 = G__36647;
i__36598_36631 = G__36648;
continue;
}
} else {
}
}
break;
}

var G__36649 = cljs.core.next.call(null,seq__36587__$1);
var G__36650 = null;
var G__36651 = (0);
var G__36652 = (0);
seq__36587 = G__36649;
chunk__36588 = G__36650;
count__36589 = G__36651;
i__36590 = G__36652;
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
var seq__36657_36661 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36658_36662 = null;
var count__36659_36663 = (0);
var i__36660_36664 = (0);
while(true){
if((i__36660_36664 < count__36659_36663)){
var ns_36665 = cljs.core._nth.call(null,chunk__36658_36662,i__36660_36664);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36665);

var G__36666 = seq__36657_36661;
var G__36667 = chunk__36658_36662;
var G__36668 = count__36659_36663;
var G__36669 = (i__36660_36664 + (1));
seq__36657_36661 = G__36666;
chunk__36658_36662 = G__36667;
count__36659_36663 = G__36668;
i__36660_36664 = G__36669;
continue;
} else {
var temp__4657__auto___36670 = cljs.core.seq.call(null,seq__36657_36661);
if(temp__4657__auto___36670){
var seq__36657_36671__$1 = temp__4657__auto___36670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36657_36671__$1)){
var c__25571__auto___36672 = cljs.core.chunk_first.call(null,seq__36657_36671__$1);
var G__36673 = cljs.core.chunk_rest.call(null,seq__36657_36671__$1);
var G__36674 = c__25571__auto___36672;
var G__36675 = cljs.core.count.call(null,c__25571__auto___36672);
var G__36676 = (0);
seq__36657_36661 = G__36673;
chunk__36658_36662 = G__36674;
count__36659_36663 = G__36675;
i__36660_36664 = G__36676;
continue;
} else {
var ns_36677 = cljs.core.first.call(null,seq__36657_36671__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36677);

var G__36678 = cljs.core.next.call(null,seq__36657_36671__$1);
var G__36679 = null;
var G__36680 = (0);
var G__36681 = (0);
seq__36657_36661 = G__36678;
chunk__36658_36662 = G__36679;
count__36659_36663 = G__36680;
i__36660_36664 = G__36681;
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
goog.require_figwheel_backup_ = (function (){var or__24760__auto__ = goog.require__;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
var G__36682__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36683__i = 0, G__36683__a = new Array(arguments.length -  0);
while (G__36683__i < G__36683__a.length) {G__36683__a[G__36683__i] = arguments[G__36683__i + 0]; ++G__36683__i;}
  args = new cljs.core.IndexedSeq(G__36683__a,0);
} 
return G__36682__delegate.call(this,args);};
G__36682.cljs$lang$maxFixedArity = 0;
G__36682.cljs$lang$applyTo = (function (arglist__36684){
var args = cljs.core.seq(arglist__36684);
return G__36682__delegate(args);
});
G__36682.cljs$core$IFn$_invoke$arity$variadic = G__36682__delegate;
return G__36682;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36686 = cljs.core._EQ_;
var expr__36687 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36686.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36687))){
var path_parts = ((function (pred__36686,expr__36687){
return (function (p1__36685_SHARP_){
return clojure.string.split.call(null,p1__36685_SHARP_,/[\/\\]/);
});})(pred__36686,expr__36687))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36686,expr__36687){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36689){if((e36689 instanceof Error)){
var e = e36689;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36689;

}
}})());
});
;})(path_parts,sep,root,pred__36686,expr__36687))
} else {
if(cljs.core.truth_(pred__36686.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36687))){
return ((function (pred__36686,expr__36687){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__36686,expr__36687){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36686,expr__36687))
);

return deferred.addErrback(((function (deferred,pred__36686,expr__36687){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36686,expr__36687))
);
});
;})(pred__36686,expr__36687))
} else {
return ((function (pred__36686,expr__36687){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36686,expr__36687))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36690,callback){
var map__36693 = p__36690;
var map__36693__$1 = ((((!((map__36693 == null)))?((((map__36693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36693):map__36693);
var file_msg = map__36693__$1;
var request_url = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36693,map__36693__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36693,map__36693__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__){
return (function (state_36717){
var state_val_36718 = (state_36717[(1)]);
if((state_val_36718 === (7))){
var inst_36713 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36719_36739 = state_36717__$1;
(statearr_36719_36739[(2)] = inst_36713);

(statearr_36719_36739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (1))){
var state_36717__$1 = state_36717;
var statearr_36720_36740 = state_36717__$1;
(statearr_36720_36740[(2)] = null);

(statearr_36720_36740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (4))){
var inst_36697 = (state_36717[(7)]);
var inst_36697__$1 = (state_36717[(2)]);
var state_36717__$1 = (function (){var statearr_36721 = state_36717;
(statearr_36721[(7)] = inst_36697__$1);

return statearr_36721;
})();
if(cljs.core.truth_(inst_36697__$1)){
var statearr_36722_36741 = state_36717__$1;
(statearr_36722_36741[(1)] = (5));

} else {
var statearr_36723_36742 = state_36717__$1;
(statearr_36723_36742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (6))){
var state_36717__$1 = state_36717;
var statearr_36724_36743 = state_36717__$1;
(statearr_36724_36743[(2)] = null);

(statearr_36724_36743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (3))){
var inst_36715 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36717__$1,inst_36715);
} else {
if((state_val_36718 === (2))){
var state_36717__$1 = state_36717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36717__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36718 === (11))){
var inst_36709 = (state_36717[(2)]);
var state_36717__$1 = (function (){var statearr_36725 = state_36717;
(statearr_36725[(8)] = inst_36709);

return statearr_36725;
})();
var statearr_36726_36744 = state_36717__$1;
(statearr_36726_36744[(2)] = null);

(statearr_36726_36744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (9))){
var inst_36703 = (state_36717[(9)]);
var inst_36701 = (state_36717[(10)]);
var inst_36705 = inst_36703.call(null,inst_36701);
var state_36717__$1 = state_36717;
var statearr_36727_36745 = state_36717__$1;
(statearr_36727_36745[(2)] = inst_36705);

(statearr_36727_36745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (5))){
var inst_36697 = (state_36717[(7)]);
var inst_36699 = figwheel.client.file_reloading.blocking_load.call(null,inst_36697);
var state_36717__$1 = state_36717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36717__$1,(8),inst_36699);
} else {
if((state_val_36718 === (10))){
var inst_36701 = (state_36717[(10)]);
var inst_36707 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36701);
var state_36717__$1 = state_36717;
var statearr_36728_36746 = state_36717__$1;
(statearr_36728_36746[(2)] = inst_36707);

(statearr_36728_36746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (8))){
var inst_36697 = (state_36717[(7)]);
var inst_36703 = (state_36717[(9)]);
var inst_36701 = (state_36717[(2)]);
var inst_36702 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36703__$1 = cljs.core.get.call(null,inst_36702,inst_36697);
var state_36717__$1 = (function (){var statearr_36729 = state_36717;
(statearr_36729[(9)] = inst_36703__$1);

(statearr_36729[(10)] = inst_36701);

return statearr_36729;
})();
if(cljs.core.truth_(inst_36703__$1)){
var statearr_36730_36747 = state_36717__$1;
(statearr_36730_36747[(1)] = (9));

} else {
var statearr_36731_36748 = state_36717__$1;
(statearr_36731_36748[(1)] = (10));

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
});})(c__28578__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28467__auto__ = null;
var figwheel$client$file_reloading$state_machine__28467__auto____0 = (function (){
var statearr_36735 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36735[(0)] = figwheel$client$file_reloading$state_machine__28467__auto__);

(statearr_36735[(1)] = (1));

return statearr_36735;
});
var figwheel$client$file_reloading$state_machine__28467__auto____1 = (function (state_36717){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_36717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e36736){if((e36736 instanceof Object)){
var ex__28470__auto__ = e36736;
var statearr_36737_36749 = state_36717;
(statearr_36737_36749[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36750 = state_36717;
state_36717 = G__36750;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28467__auto__ = function(state_36717){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28467__auto____1.call(this,state_36717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28467__auto____0;
figwheel$client$file_reloading$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28467__auto____1;
return figwheel$client$file_reloading$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_36738 = f__28579__auto__.call(null);
(statearr_36738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36751,callback){
var map__36754 = p__36751;
var map__36754__$1 = ((((!((map__36754 == null)))?((((map__36754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36754):map__36754);
var file_msg = map__36754__$1;
var namespace = cljs.core.get.call(null,map__36754__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36754,map__36754__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36754,map__36754__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36756){
var map__36759 = p__36756;
var map__36759__$1 = ((((!((map__36759 == null)))?((((map__36759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36759):map__36759);
var file_msg = map__36759__$1;
var namespace = cljs.core.get.call(null,map__36759__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24748__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24748__auto__){
var or__24760__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto____$1)){
return or__24760__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24748__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36761,callback){
var map__36764 = p__36761;
var map__36764__$1 = ((((!((map__36764 == null)))?((((map__36764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36764):map__36764);
var file_msg = map__36764__$1;
var request_url = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28578__auto___36868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___36868,out){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___36868,out){
return (function (state_36850){
var state_val_36851 = (state_36850[(1)]);
if((state_val_36851 === (1))){
var inst_36824 = cljs.core.seq.call(null,files);
var inst_36825 = cljs.core.first.call(null,inst_36824);
var inst_36826 = cljs.core.next.call(null,inst_36824);
var inst_36827 = files;
var state_36850__$1 = (function (){var statearr_36852 = state_36850;
(statearr_36852[(7)] = inst_36827);

(statearr_36852[(8)] = inst_36825);

(statearr_36852[(9)] = inst_36826);

return statearr_36852;
})();
var statearr_36853_36869 = state_36850__$1;
(statearr_36853_36869[(2)] = null);

(statearr_36853_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (2))){
var inst_36833 = (state_36850[(10)]);
var inst_36827 = (state_36850[(7)]);
var inst_36832 = cljs.core.seq.call(null,inst_36827);
var inst_36833__$1 = cljs.core.first.call(null,inst_36832);
var inst_36834 = cljs.core.next.call(null,inst_36832);
var inst_36835 = (inst_36833__$1 == null);
var inst_36836 = cljs.core.not.call(null,inst_36835);
var state_36850__$1 = (function (){var statearr_36854 = state_36850;
(statearr_36854[(10)] = inst_36833__$1);

(statearr_36854[(11)] = inst_36834);

return statearr_36854;
})();
if(inst_36836){
var statearr_36855_36870 = state_36850__$1;
(statearr_36855_36870[(1)] = (4));

} else {
var statearr_36856_36871 = state_36850__$1;
(statearr_36856_36871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (3))){
var inst_36848 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36850__$1,inst_36848);
} else {
if((state_val_36851 === (4))){
var inst_36833 = (state_36850[(10)]);
var inst_36838 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36833);
var state_36850__$1 = state_36850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36850__$1,(7),inst_36838);
} else {
if((state_val_36851 === (5))){
var inst_36844 = cljs.core.async.close_BANG_.call(null,out);
var state_36850__$1 = state_36850;
var statearr_36857_36872 = state_36850__$1;
(statearr_36857_36872[(2)] = inst_36844);

(statearr_36857_36872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (6))){
var inst_36846 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
var statearr_36858_36873 = state_36850__$1;
(statearr_36858_36873[(2)] = inst_36846);

(statearr_36858_36873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (7))){
var inst_36834 = (state_36850[(11)]);
var inst_36840 = (state_36850[(2)]);
var inst_36841 = cljs.core.async.put_BANG_.call(null,out,inst_36840);
var inst_36827 = inst_36834;
var state_36850__$1 = (function (){var statearr_36859 = state_36850;
(statearr_36859[(7)] = inst_36827);

(statearr_36859[(12)] = inst_36841);

return statearr_36859;
})();
var statearr_36860_36874 = state_36850__$1;
(statearr_36860_36874[(2)] = null);

(statearr_36860_36874[(1)] = (2));


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
});})(c__28578__auto___36868,out))
;
return ((function (switch__28466__auto__,c__28578__auto___36868,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto____0 = (function (){
var statearr_36864 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36864[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto__);

(statearr_36864[(1)] = (1));

return statearr_36864;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto____1 = (function (state_36850){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_36850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e36865){if((e36865 instanceof Object)){
var ex__28470__auto__ = e36865;
var statearr_36866_36875 = state_36850;
(statearr_36866_36875[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36876 = state_36850;
state_36850 = G__36876;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto__ = function(state_36850){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto____1.call(this,state_36850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___36868,out))
})();
var state__28580__auto__ = (function (){var statearr_36867 = f__28579__auto__.call(null);
(statearr_36867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___36868);

return statearr_36867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___36868,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36877,opts){
var map__36881 = p__36877;
var map__36881__$1 = ((((!((map__36881 == null)))?((((map__36881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36881):map__36881);
var eval_body__$1 = cljs.core.get.call(null,map__36881__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36881__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24748__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24748__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24748__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36883){var e = e36883;
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
return (function (p1__36884_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36884_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36893){
var vec__36894 = p__36893;
var k = cljs.core.nth.call(null,vec__36894,(0),null);
var v = cljs.core.nth.call(null,vec__36894,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36897){
var vec__36898 = p__36897;
var k = cljs.core.nth.call(null,vec__36898,(0),null);
var v = cljs.core.nth.call(null,vec__36898,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36904,p__36905){
var map__37152 = p__36904;
var map__37152__$1 = ((((!((map__37152 == null)))?((((map__37152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37152):map__37152);
var opts = map__37152__$1;
var before_jsload = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37153 = p__36905;
var map__37153__$1 = ((((!((map__37153 == null)))?((((map__37153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37153):map__37153);
var msg = map__37153__$1;
var files = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37306){
var state_val_37307 = (state_37306[(1)]);
if((state_val_37307 === (7))){
var inst_37170 = (state_37306[(7)]);
var inst_37169 = (state_37306[(8)]);
var inst_37168 = (state_37306[(9)]);
var inst_37167 = (state_37306[(10)]);
var inst_37175 = cljs.core._nth.call(null,inst_37168,inst_37170);
var inst_37176 = figwheel.client.file_reloading.eval_body.call(null,inst_37175,opts);
var inst_37177 = (inst_37170 + (1));
var tmp37308 = inst_37169;
var tmp37309 = inst_37168;
var tmp37310 = inst_37167;
var inst_37167__$1 = tmp37310;
var inst_37168__$1 = tmp37309;
var inst_37169__$1 = tmp37308;
var inst_37170__$1 = inst_37177;
var state_37306__$1 = (function (){var statearr_37311 = state_37306;
(statearr_37311[(11)] = inst_37176);

(statearr_37311[(7)] = inst_37170__$1);

(statearr_37311[(8)] = inst_37169__$1);

(statearr_37311[(9)] = inst_37168__$1);

(statearr_37311[(10)] = inst_37167__$1);

return statearr_37311;
})();
var statearr_37312_37398 = state_37306__$1;
(statearr_37312_37398[(2)] = null);

(statearr_37312_37398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (20))){
var inst_37210 = (state_37306[(12)]);
var inst_37218 = figwheel.client.file_reloading.sort_files.call(null,inst_37210);
var state_37306__$1 = state_37306;
var statearr_37313_37399 = state_37306__$1;
(statearr_37313_37399[(2)] = inst_37218);

(statearr_37313_37399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (27))){
var state_37306__$1 = state_37306;
var statearr_37314_37400 = state_37306__$1;
(statearr_37314_37400[(2)] = null);

(statearr_37314_37400[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (1))){
var inst_37159 = (state_37306[(13)]);
var inst_37156 = before_jsload.call(null,files);
var inst_37157 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37158 = (function (){return ((function (inst_37159,inst_37156,inst_37157,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36901_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36901_SHARP_);
});
;})(inst_37159,inst_37156,inst_37157,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37159__$1 = cljs.core.filter.call(null,inst_37158,files);
var inst_37160 = cljs.core.not_empty.call(null,inst_37159__$1);
var state_37306__$1 = (function (){var statearr_37315 = state_37306;
(statearr_37315[(13)] = inst_37159__$1);

(statearr_37315[(14)] = inst_37156);

(statearr_37315[(15)] = inst_37157);

return statearr_37315;
})();
if(cljs.core.truth_(inst_37160)){
var statearr_37316_37401 = state_37306__$1;
(statearr_37316_37401[(1)] = (2));

} else {
var statearr_37317_37402 = state_37306__$1;
(statearr_37317_37402[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (24))){
var state_37306__$1 = state_37306;
var statearr_37318_37403 = state_37306__$1;
(statearr_37318_37403[(2)] = null);

(statearr_37318_37403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (39))){
var inst_37260 = (state_37306[(16)]);
var state_37306__$1 = state_37306;
var statearr_37319_37404 = state_37306__$1;
(statearr_37319_37404[(2)] = inst_37260);

(statearr_37319_37404[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (46))){
var inst_37301 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
var statearr_37320_37405 = state_37306__$1;
(statearr_37320_37405[(2)] = inst_37301);

(statearr_37320_37405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (4))){
var inst_37204 = (state_37306[(2)]);
var inst_37205 = cljs.core.List.EMPTY;
var inst_37206 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37205);
var inst_37207 = (function (){return ((function (inst_37204,inst_37205,inst_37206,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36902_SHARP_){
var and__24748__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36902_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36902_SHARP_));
} else {
return and__24748__auto__;
}
});
;})(inst_37204,inst_37205,inst_37206,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37208 = cljs.core.filter.call(null,inst_37207,files);
var inst_37209 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37210 = cljs.core.concat.call(null,inst_37208,inst_37209);
var state_37306__$1 = (function (){var statearr_37321 = state_37306;
(statearr_37321[(17)] = inst_37206);

(statearr_37321[(12)] = inst_37210);

(statearr_37321[(18)] = inst_37204);

return statearr_37321;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37322_37406 = state_37306__$1;
(statearr_37322_37406[(1)] = (16));

} else {
var statearr_37323_37407 = state_37306__$1;
(statearr_37323_37407[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (15))){
var inst_37194 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
var statearr_37324_37408 = state_37306__$1;
(statearr_37324_37408[(2)] = inst_37194);

(statearr_37324_37408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (21))){
var inst_37220 = (state_37306[(19)]);
var inst_37220__$1 = (state_37306[(2)]);
var inst_37221 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37220__$1);
var state_37306__$1 = (function (){var statearr_37325 = state_37306;
(statearr_37325[(19)] = inst_37220__$1);

return statearr_37325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37306__$1,(22),inst_37221);
} else {
if((state_val_37307 === (31))){
var inst_37304 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37306__$1,inst_37304);
} else {
if((state_val_37307 === (32))){
var inst_37260 = (state_37306[(16)]);
var inst_37265 = inst_37260.cljs$lang$protocol_mask$partition0$;
var inst_37266 = (inst_37265 & (64));
var inst_37267 = inst_37260.cljs$core$ISeq$;
var inst_37268 = (inst_37266) || (inst_37267);
var state_37306__$1 = state_37306;
if(cljs.core.truth_(inst_37268)){
var statearr_37326_37409 = state_37306__$1;
(statearr_37326_37409[(1)] = (35));

} else {
var statearr_37327_37410 = state_37306__$1;
(statearr_37327_37410[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (40))){
var inst_37281 = (state_37306[(20)]);
var inst_37280 = (state_37306[(2)]);
var inst_37281__$1 = cljs.core.get.call(null,inst_37280,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37282 = cljs.core.get.call(null,inst_37280,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37283 = cljs.core.not_empty.call(null,inst_37281__$1);
var state_37306__$1 = (function (){var statearr_37328 = state_37306;
(statearr_37328[(20)] = inst_37281__$1);

(statearr_37328[(21)] = inst_37282);

return statearr_37328;
})();
if(cljs.core.truth_(inst_37283)){
var statearr_37329_37411 = state_37306__$1;
(statearr_37329_37411[(1)] = (41));

} else {
var statearr_37330_37412 = state_37306__$1;
(statearr_37330_37412[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (33))){
var state_37306__$1 = state_37306;
var statearr_37331_37413 = state_37306__$1;
(statearr_37331_37413[(2)] = false);

(statearr_37331_37413[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (13))){
var inst_37180 = (state_37306[(22)]);
var inst_37184 = cljs.core.chunk_first.call(null,inst_37180);
var inst_37185 = cljs.core.chunk_rest.call(null,inst_37180);
var inst_37186 = cljs.core.count.call(null,inst_37184);
var inst_37167 = inst_37185;
var inst_37168 = inst_37184;
var inst_37169 = inst_37186;
var inst_37170 = (0);
var state_37306__$1 = (function (){var statearr_37332 = state_37306;
(statearr_37332[(7)] = inst_37170);

(statearr_37332[(8)] = inst_37169);

(statearr_37332[(9)] = inst_37168);

(statearr_37332[(10)] = inst_37167);

return statearr_37332;
})();
var statearr_37333_37414 = state_37306__$1;
(statearr_37333_37414[(2)] = null);

(statearr_37333_37414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (22))){
var inst_37223 = (state_37306[(23)]);
var inst_37228 = (state_37306[(24)]);
var inst_37220 = (state_37306[(19)]);
var inst_37224 = (state_37306[(25)]);
var inst_37223__$1 = (state_37306[(2)]);
var inst_37224__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37223__$1);
var inst_37225 = (function (){var all_files = inst_37220;
var res_SINGLEQUOTE_ = inst_37223__$1;
var res = inst_37224__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37223,inst_37228,inst_37220,inst_37224,inst_37223__$1,inst_37224__$1,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36903_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36903_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37223,inst_37228,inst_37220,inst_37224,inst_37223__$1,inst_37224__$1,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37226 = cljs.core.filter.call(null,inst_37225,inst_37223__$1);
var inst_37227 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37228__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37227);
var inst_37229 = cljs.core.not_empty.call(null,inst_37228__$1);
var state_37306__$1 = (function (){var statearr_37334 = state_37306;
(statearr_37334[(23)] = inst_37223__$1);

(statearr_37334[(26)] = inst_37226);

(statearr_37334[(24)] = inst_37228__$1);

(statearr_37334[(25)] = inst_37224__$1);

return statearr_37334;
})();
if(cljs.core.truth_(inst_37229)){
var statearr_37335_37415 = state_37306__$1;
(statearr_37335_37415[(1)] = (23));

} else {
var statearr_37336_37416 = state_37306__$1;
(statearr_37336_37416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (36))){
var state_37306__$1 = state_37306;
var statearr_37337_37417 = state_37306__$1;
(statearr_37337_37417[(2)] = false);

(statearr_37337_37417[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (41))){
var inst_37281 = (state_37306[(20)]);
var inst_37285 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37286 = cljs.core.map.call(null,inst_37285,inst_37281);
var inst_37287 = cljs.core.pr_str.call(null,inst_37286);
var inst_37288 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37287)].join('');
var inst_37289 = figwheel.client.utils.log.call(null,inst_37288);
var state_37306__$1 = state_37306;
var statearr_37338_37418 = state_37306__$1;
(statearr_37338_37418[(2)] = inst_37289);

(statearr_37338_37418[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (43))){
var inst_37282 = (state_37306[(21)]);
var inst_37292 = (state_37306[(2)]);
var inst_37293 = cljs.core.not_empty.call(null,inst_37282);
var state_37306__$1 = (function (){var statearr_37339 = state_37306;
(statearr_37339[(27)] = inst_37292);

return statearr_37339;
})();
if(cljs.core.truth_(inst_37293)){
var statearr_37340_37419 = state_37306__$1;
(statearr_37340_37419[(1)] = (44));

} else {
var statearr_37341_37420 = state_37306__$1;
(statearr_37341_37420[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (29))){
var inst_37223 = (state_37306[(23)]);
var inst_37226 = (state_37306[(26)]);
var inst_37228 = (state_37306[(24)]);
var inst_37220 = (state_37306[(19)]);
var inst_37260 = (state_37306[(16)]);
var inst_37224 = (state_37306[(25)]);
var inst_37256 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37259 = (function (){var all_files = inst_37220;
var res_SINGLEQUOTE_ = inst_37223;
var res = inst_37224;
var files_not_loaded = inst_37226;
var dependencies_that_loaded = inst_37228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37260,inst_37224,inst_37256,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37258){
var map__37342 = p__37258;
var map__37342__$1 = ((((!((map__37342 == null)))?((((map__37342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37342):map__37342);
var namespace = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37260,inst_37224,inst_37256,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37260__$1 = cljs.core.group_by.call(null,inst_37259,inst_37226);
var inst_37262 = (inst_37260__$1 == null);
var inst_37263 = cljs.core.not.call(null,inst_37262);
var state_37306__$1 = (function (){var statearr_37344 = state_37306;
(statearr_37344[(28)] = inst_37256);

(statearr_37344[(16)] = inst_37260__$1);

return statearr_37344;
})();
if(inst_37263){
var statearr_37345_37421 = state_37306__$1;
(statearr_37345_37421[(1)] = (32));

} else {
var statearr_37346_37422 = state_37306__$1;
(statearr_37346_37422[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (44))){
var inst_37282 = (state_37306[(21)]);
var inst_37295 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37282);
var inst_37296 = cljs.core.pr_str.call(null,inst_37295);
var inst_37297 = [cljs.core.str("not required: "),cljs.core.str(inst_37296)].join('');
var inst_37298 = figwheel.client.utils.log.call(null,inst_37297);
var state_37306__$1 = state_37306;
var statearr_37347_37423 = state_37306__$1;
(statearr_37347_37423[(2)] = inst_37298);

(statearr_37347_37423[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (6))){
var inst_37201 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
var statearr_37348_37424 = state_37306__$1;
(statearr_37348_37424[(2)] = inst_37201);

(statearr_37348_37424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (28))){
var inst_37226 = (state_37306[(26)]);
var inst_37253 = (state_37306[(2)]);
var inst_37254 = cljs.core.not_empty.call(null,inst_37226);
var state_37306__$1 = (function (){var statearr_37349 = state_37306;
(statearr_37349[(29)] = inst_37253);

return statearr_37349;
})();
if(cljs.core.truth_(inst_37254)){
var statearr_37350_37425 = state_37306__$1;
(statearr_37350_37425[(1)] = (29));

} else {
var statearr_37351_37426 = state_37306__$1;
(statearr_37351_37426[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (25))){
var inst_37224 = (state_37306[(25)]);
var inst_37240 = (state_37306[(2)]);
var inst_37241 = cljs.core.not_empty.call(null,inst_37224);
var state_37306__$1 = (function (){var statearr_37352 = state_37306;
(statearr_37352[(30)] = inst_37240);

return statearr_37352;
})();
if(cljs.core.truth_(inst_37241)){
var statearr_37353_37427 = state_37306__$1;
(statearr_37353_37427[(1)] = (26));

} else {
var statearr_37354_37428 = state_37306__$1;
(statearr_37354_37428[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (34))){
var inst_37275 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
if(cljs.core.truth_(inst_37275)){
var statearr_37355_37429 = state_37306__$1;
(statearr_37355_37429[(1)] = (38));

} else {
var statearr_37356_37430 = state_37306__$1;
(statearr_37356_37430[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (17))){
var state_37306__$1 = state_37306;
var statearr_37357_37431 = state_37306__$1;
(statearr_37357_37431[(2)] = recompile_dependents);

(statearr_37357_37431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (3))){
var state_37306__$1 = state_37306;
var statearr_37358_37432 = state_37306__$1;
(statearr_37358_37432[(2)] = null);

(statearr_37358_37432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (12))){
var inst_37197 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
var statearr_37359_37433 = state_37306__$1;
(statearr_37359_37433[(2)] = inst_37197);

(statearr_37359_37433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (2))){
var inst_37159 = (state_37306[(13)]);
var inst_37166 = cljs.core.seq.call(null,inst_37159);
var inst_37167 = inst_37166;
var inst_37168 = null;
var inst_37169 = (0);
var inst_37170 = (0);
var state_37306__$1 = (function (){var statearr_37360 = state_37306;
(statearr_37360[(7)] = inst_37170);

(statearr_37360[(8)] = inst_37169);

(statearr_37360[(9)] = inst_37168);

(statearr_37360[(10)] = inst_37167);

return statearr_37360;
})();
var statearr_37361_37434 = state_37306__$1;
(statearr_37361_37434[(2)] = null);

(statearr_37361_37434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (23))){
var inst_37223 = (state_37306[(23)]);
var inst_37226 = (state_37306[(26)]);
var inst_37228 = (state_37306[(24)]);
var inst_37220 = (state_37306[(19)]);
var inst_37224 = (state_37306[(25)]);
var inst_37231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37233 = (function (){var all_files = inst_37220;
var res_SINGLEQUOTE_ = inst_37223;
var res = inst_37224;
var files_not_loaded = inst_37226;
var dependencies_that_loaded = inst_37228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37224,inst_37231,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37232){
var map__37362 = p__37232;
var map__37362__$1 = ((((!((map__37362 == null)))?((((map__37362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37362):map__37362);
var request_url = cljs.core.get.call(null,map__37362__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37224,inst_37231,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37234 = cljs.core.reverse.call(null,inst_37228);
var inst_37235 = cljs.core.map.call(null,inst_37233,inst_37234);
var inst_37236 = cljs.core.pr_str.call(null,inst_37235);
var inst_37237 = figwheel.client.utils.log.call(null,inst_37236);
var state_37306__$1 = (function (){var statearr_37364 = state_37306;
(statearr_37364[(31)] = inst_37231);

return statearr_37364;
})();
var statearr_37365_37435 = state_37306__$1;
(statearr_37365_37435[(2)] = inst_37237);

(statearr_37365_37435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (35))){
var state_37306__$1 = state_37306;
var statearr_37366_37436 = state_37306__$1;
(statearr_37366_37436[(2)] = true);

(statearr_37366_37436[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (19))){
var inst_37210 = (state_37306[(12)]);
var inst_37216 = figwheel.client.file_reloading.expand_files.call(null,inst_37210);
var state_37306__$1 = state_37306;
var statearr_37367_37437 = state_37306__$1;
(statearr_37367_37437[(2)] = inst_37216);

(statearr_37367_37437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (11))){
var state_37306__$1 = state_37306;
var statearr_37368_37438 = state_37306__$1;
(statearr_37368_37438[(2)] = null);

(statearr_37368_37438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (9))){
var inst_37199 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
var statearr_37369_37439 = state_37306__$1;
(statearr_37369_37439[(2)] = inst_37199);

(statearr_37369_37439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (5))){
var inst_37170 = (state_37306[(7)]);
var inst_37169 = (state_37306[(8)]);
var inst_37172 = (inst_37170 < inst_37169);
var inst_37173 = inst_37172;
var state_37306__$1 = state_37306;
if(cljs.core.truth_(inst_37173)){
var statearr_37370_37440 = state_37306__$1;
(statearr_37370_37440[(1)] = (7));

} else {
var statearr_37371_37441 = state_37306__$1;
(statearr_37371_37441[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (14))){
var inst_37180 = (state_37306[(22)]);
var inst_37189 = cljs.core.first.call(null,inst_37180);
var inst_37190 = figwheel.client.file_reloading.eval_body.call(null,inst_37189,opts);
var inst_37191 = cljs.core.next.call(null,inst_37180);
var inst_37167 = inst_37191;
var inst_37168 = null;
var inst_37169 = (0);
var inst_37170 = (0);
var state_37306__$1 = (function (){var statearr_37372 = state_37306;
(statearr_37372[(32)] = inst_37190);

(statearr_37372[(7)] = inst_37170);

(statearr_37372[(8)] = inst_37169);

(statearr_37372[(9)] = inst_37168);

(statearr_37372[(10)] = inst_37167);

return statearr_37372;
})();
var statearr_37373_37442 = state_37306__$1;
(statearr_37373_37442[(2)] = null);

(statearr_37373_37442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (45))){
var state_37306__$1 = state_37306;
var statearr_37374_37443 = state_37306__$1;
(statearr_37374_37443[(2)] = null);

(statearr_37374_37443[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (26))){
var inst_37223 = (state_37306[(23)]);
var inst_37226 = (state_37306[(26)]);
var inst_37228 = (state_37306[(24)]);
var inst_37220 = (state_37306[(19)]);
var inst_37224 = (state_37306[(25)]);
var inst_37243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37245 = (function (){var all_files = inst_37220;
var res_SINGLEQUOTE_ = inst_37223;
var res = inst_37224;
var files_not_loaded = inst_37226;
var dependencies_that_loaded = inst_37228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37224,inst_37243,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37244){
var map__37375 = p__37244;
var map__37375__$1 = ((((!((map__37375 == null)))?((((map__37375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37375):map__37375);
var namespace = cljs.core.get.call(null,map__37375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37224,inst_37243,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37246 = cljs.core.map.call(null,inst_37245,inst_37224);
var inst_37247 = cljs.core.pr_str.call(null,inst_37246);
var inst_37248 = figwheel.client.utils.log.call(null,inst_37247);
var inst_37249 = (function (){var all_files = inst_37220;
var res_SINGLEQUOTE_ = inst_37223;
var res = inst_37224;
var files_not_loaded = inst_37226;
var dependencies_that_loaded = inst_37228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37224,inst_37243,inst_37245,inst_37246,inst_37247,inst_37248,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37223,inst_37226,inst_37228,inst_37220,inst_37224,inst_37243,inst_37245,inst_37246,inst_37247,inst_37248,state_val_37307,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37250 = setTimeout(inst_37249,(10));
var state_37306__$1 = (function (){var statearr_37377 = state_37306;
(statearr_37377[(33)] = inst_37243);

(statearr_37377[(34)] = inst_37248);

return statearr_37377;
})();
var statearr_37378_37444 = state_37306__$1;
(statearr_37378_37444[(2)] = inst_37250);

(statearr_37378_37444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (16))){
var state_37306__$1 = state_37306;
var statearr_37379_37445 = state_37306__$1;
(statearr_37379_37445[(2)] = reload_dependents);

(statearr_37379_37445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (38))){
var inst_37260 = (state_37306[(16)]);
var inst_37277 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37260);
var state_37306__$1 = state_37306;
var statearr_37380_37446 = state_37306__$1;
(statearr_37380_37446[(2)] = inst_37277);

(statearr_37380_37446[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (30))){
var state_37306__$1 = state_37306;
var statearr_37381_37447 = state_37306__$1;
(statearr_37381_37447[(2)] = null);

(statearr_37381_37447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (10))){
var inst_37180 = (state_37306[(22)]);
var inst_37182 = cljs.core.chunked_seq_QMARK_.call(null,inst_37180);
var state_37306__$1 = state_37306;
if(inst_37182){
var statearr_37382_37448 = state_37306__$1;
(statearr_37382_37448[(1)] = (13));

} else {
var statearr_37383_37449 = state_37306__$1;
(statearr_37383_37449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (18))){
var inst_37214 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
if(cljs.core.truth_(inst_37214)){
var statearr_37384_37450 = state_37306__$1;
(statearr_37384_37450[(1)] = (19));

} else {
var statearr_37385_37451 = state_37306__$1;
(statearr_37385_37451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (42))){
var state_37306__$1 = state_37306;
var statearr_37386_37452 = state_37306__$1;
(statearr_37386_37452[(2)] = null);

(statearr_37386_37452[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (37))){
var inst_37272 = (state_37306[(2)]);
var state_37306__$1 = state_37306;
var statearr_37387_37453 = state_37306__$1;
(statearr_37387_37453[(2)] = inst_37272);

(statearr_37387_37453[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37307 === (8))){
var inst_37180 = (state_37306[(22)]);
var inst_37167 = (state_37306[(10)]);
var inst_37180__$1 = cljs.core.seq.call(null,inst_37167);
var state_37306__$1 = (function (){var statearr_37388 = state_37306;
(statearr_37388[(22)] = inst_37180__$1);

return statearr_37388;
})();
if(inst_37180__$1){
var statearr_37389_37454 = state_37306__$1;
(statearr_37389_37454[(1)] = (10));

} else {
var statearr_37390_37455 = state_37306__$1;
(statearr_37390_37455[(1)] = (11));

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
});})(c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28466__auto__,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto____0 = (function (){
var statearr_37394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37394[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto__);

(statearr_37394[(1)] = (1));

return statearr_37394;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto____1 = (function (state_37306){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_37306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e37395){if((e37395 instanceof Object)){
var ex__28470__auto__ = e37395;
var statearr_37396_37456 = state_37306;
(statearr_37396_37456[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37457 = state_37306;
state_37306 = G__37457;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto__ = function(state_37306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto____1.call(this,state_37306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28580__auto__ = (function (){var statearr_37397 = f__28579__auto__.call(null);
(statearr_37397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_37397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,map__37152,map__37152__$1,opts,before_jsload,on_jsload,reload_dependents,map__37153,map__37153__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28578__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37460,link){
var map__37463 = p__37460;
var map__37463__$1 = ((((!((map__37463 == null)))?((((map__37463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37463):map__37463);
var file = cljs.core.get.call(null,map__37463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37463,map__37463__$1,file){
return (function (p1__37458_SHARP_,p2__37459_SHARP_){
if(cljs.core._EQ_.call(null,p1__37458_SHARP_,p2__37459_SHARP_)){
return p1__37458_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37463,map__37463__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37469){
var map__37470 = p__37469;
var map__37470__$1 = ((((!((map__37470 == null)))?((((map__37470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37470):map__37470);
var match_length = cljs.core.get.call(null,map__37470__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37470__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37465_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37465_SHARP_);
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
var args37472 = [];
var len__25835__auto___37475 = arguments.length;
var i__25836__auto___37476 = (0);
while(true){
if((i__25836__auto___37476 < len__25835__auto___37475)){
args37472.push((arguments[i__25836__auto___37476]));

var G__37477 = (i__25836__auto___37476 + (1));
i__25836__auto___37476 = G__37477;
continue;
} else {
}
break;
}

var G__37474 = args37472.length;
switch (G__37474) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37472.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37479_SHARP_,p2__37480_SHARP_){
return cljs.core.assoc.call(null,p1__37479_SHARP_,cljs.core.get.call(null,p2__37480_SHARP_,key),p2__37480_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37481){
var map__37484 = p__37481;
var map__37484__$1 = ((((!((map__37484 == null)))?((((map__37484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37484):map__37484);
var f_data = map__37484__$1;
var file = cljs.core.get.call(null,map__37484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37486,p__37487){
var map__37496 = p__37486;
var map__37496__$1 = ((((!((map__37496 == null)))?((((map__37496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37496):map__37496);
var opts = map__37496__$1;
var on_cssload = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37497 = p__37487;
var map__37497__$1 = ((((!((map__37497 == null)))?((((map__37497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37497):map__37497);
var files_msg = map__37497__$1;
var files = cljs.core.get.call(null,map__37497__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37500_37504 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__37501_37505 = null;
var count__37502_37506 = (0);
var i__37503_37507 = (0);
while(true){
if((i__37503_37507 < count__37502_37506)){
var f_37508 = cljs.core._nth.call(null,chunk__37501_37505,i__37503_37507);
figwheel.client.file_reloading.reload_css_file.call(null,f_37508);

var G__37509 = seq__37500_37504;
var G__37510 = chunk__37501_37505;
var G__37511 = count__37502_37506;
var G__37512 = (i__37503_37507 + (1));
seq__37500_37504 = G__37509;
chunk__37501_37505 = G__37510;
count__37502_37506 = G__37511;
i__37503_37507 = G__37512;
continue;
} else {
var temp__4657__auto___37513 = cljs.core.seq.call(null,seq__37500_37504);
if(temp__4657__auto___37513){
var seq__37500_37514__$1 = temp__4657__auto___37513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37500_37514__$1)){
var c__25571__auto___37515 = cljs.core.chunk_first.call(null,seq__37500_37514__$1);
var G__37516 = cljs.core.chunk_rest.call(null,seq__37500_37514__$1);
var G__37517 = c__25571__auto___37515;
var G__37518 = cljs.core.count.call(null,c__25571__auto___37515);
var G__37519 = (0);
seq__37500_37504 = G__37516;
chunk__37501_37505 = G__37517;
count__37502_37506 = G__37518;
i__37503_37507 = G__37519;
continue;
} else {
var f_37520 = cljs.core.first.call(null,seq__37500_37514__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37520);

var G__37521 = cljs.core.next.call(null,seq__37500_37514__$1);
var G__37522 = null;
var G__37523 = (0);
var G__37524 = (0);
seq__37500_37504 = G__37521;
chunk__37501_37505 = G__37522;
count__37502_37506 = G__37523;
i__37503_37507 = G__37524;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37496,map__37496__$1,opts,on_cssload,map__37497,map__37497__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__37496,map__37496__$1,opts,on_cssload,map__37497,map__37497__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1481153825753