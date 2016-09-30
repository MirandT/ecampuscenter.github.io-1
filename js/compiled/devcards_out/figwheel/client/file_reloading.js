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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35568_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35568_SHARP_));
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
var seq__35573 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35574 = null;
var count__35575 = (0);
var i__35576 = (0);
while(true){
if((i__35576 < count__35575)){
var n = cljs.core._nth.call(null,chunk__35574,i__35576);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35577 = seq__35573;
var G__35578 = chunk__35574;
var G__35579 = count__35575;
var G__35580 = (i__35576 + (1));
seq__35573 = G__35577;
chunk__35574 = G__35578;
count__35575 = G__35579;
i__35576 = G__35580;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35573);
if(temp__4657__auto__){
var seq__35573__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35573__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35573__$1);
var G__35581 = cljs.core.chunk_rest.call(null,seq__35573__$1);
var G__35582 = c__25571__auto__;
var G__35583 = cljs.core.count.call(null,c__25571__auto__);
var G__35584 = (0);
seq__35573 = G__35581;
chunk__35574 = G__35582;
count__35575 = G__35583;
i__35576 = G__35584;
continue;
} else {
var n = cljs.core.first.call(null,seq__35573__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35585 = cljs.core.next.call(null,seq__35573__$1);
var G__35586 = null;
var G__35587 = (0);
var G__35588 = (0);
seq__35573 = G__35585;
chunk__35574 = G__35586;
count__35575 = G__35587;
i__35576 = G__35588;
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

var seq__35639_35650 = cljs.core.seq.call(null,deps);
var chunk__35640_35651 = null;
var count__35641_35652 = (0);
var i__35642_35653 = (0);
while(true){
if((i__35642_35653 < count__35641_35652)){
var dep_35654 = cljs.core._nth.call(null,chunk__35640_35651,i__35642_35653);
topo_sort_helper_STAR_.call(null,dep_35654,(depth + (1)),state);

var G__35655 = seq__35639_35650;
var G__35656 = chunk__35640_35651;
var G__35657 = count__35641_35652;
var G__35658 = (i__35642_35653 + (1));
seq__35639_35650 = G__35655;
chunk__35640_35651 = G__35656;
count__35641_35652 = G__35657;
i__35642_35653 = G__35658;
continue;
} else {
var temp__4657__auto___35659 = cljs.core.seq.call(null,seq__35639_35650);
if(temp__4657__auto___35659){
var seq__35639_35660__$1 = temp__4657__auto___35659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35639_35660__$1)){
var c__25571__auto___35661 = cljs.core.chunk_first.call(null,seq__35639_35660__$1);
var G__35662 = cljs.core.chunk_rest.call(null,seq__35639_35660__$1);
var G__35663 = c__25571__auto___35661;
var G__35664 = cljs.core.count.call(null,c__25571__auto___35661);
var G__35665 = (0);
seq__35639_35650 = G__35662;
chunk__35640_35651 = G__35663;
count__35641_35652 = G__35664;
i__35642_35653 = G__35665;
continue;
} else {
var dep_35666 = cljs.core.first.call(null,seq__35639_35660__$1);
topo_sort_helper_STAR_.call(null,dep_35666,(depth + (1)),state);

var G__35667 = cljs.core.next.call(null,seq__35639_35660__$1);
var G__35668 = null;
var G__35669 = (0);
var G__35670 = (0);
seq__35639_35650 = G__35667;
chunk__35640_35651 = G__35668;
count__35641_35652 = G__35669;
i__35642_35653 = G__35670;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35643){
var vec__35647 = p__35643;
var seq__35648 = cljs.core.seq.call(null,vec__35647);
var first__35649 = cljs.core.first.call(null,seq__35648);
var seq__35648__$1 = cljs.core.next.call(null,seq__35648);
var x = first__35649;
var xs = seq__35648__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35647,seq__35648,first__35649,seq__35648__$1,x,xs,get_deps__$1){
return (function (p1__35589_SHARP_){
return clojure.set.difference.call(null,p1__35589_SHARP_,x);
});})(vec__35647,seq__35648,first__35649,seq__35648__$1,x,xs,get_deps__$1))
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
var seq__35683 = cljs.core.seq.call(null,provides);
var chunk__35684 = null;
var count__35685 = (0);
var i__35686 = (0);
while(true){
if((i__35686 < count__35685)){
var prov = cljs.core._nth.call(null,chunk__35684,i__35686);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35687_35695 = cljs.core.seq.call(null,requires);
var chunk__35688_35696 = null;
var count__35689_35697 = (0);
var i__35690_35698 = (0);
while(true){
if((i__35690_35698 < count__35689_35697)){
var req_35699 = cljs.core._nth.call(null,chunk__35688_35696,i__35690_35698);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35699,prov);

var G__35700 = seq__35687_35695;
var G__35701 = chunk__35688_35696;
var G__35702 = count__35689_35697;
var G__35703 = (i__35690_35698 + (1));
seq__35687_35695 = G__35700;
chunk__35688_35696 = G__35701;
count__35689_35697 = G__35702;
i__35690_35698 = G__35703;
continue;
} else {
var temp__4657__auto___35704 = cljs.core.seq.call(null,seq__35687_35695);
if(temp__4657__auto___35704){
var seq__35687_35705__$1 = temp__4657__auto___35704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35687_35705__$1)){
var c__25571__auto___35706 = cljs.core.chunk_first.call(null,seq__35687_35705__$1);
var G__35707 = cljs.core.chunk_rest.call(null,seq__35687_35705__$1);
var G__35708 = c__25571__auto___35706;
var G__35709 = cljs.core.count.call(null,c__25571__auto___35706);
var G__35710 = (0);
seq__35687_35695 = G__35707;
chunk__35688_35696 = G__35708;
count__35689_35697 = G__35709;
i__35690_35698 = G__35710;
continue;
} else {
var req_35711 = cljs.core.first.call(null,seq__35687_35705__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35711,prov);

var G__35712 = cljs.core.next.call(null,seq__35687_35705__$1);
var G__35713 = null;
var G__35714 = (0);
var G__35715 = (0);
seq__35687_35695 = G__35712;
chunk__35688_35696 = G__35713;
count__35689_35697 = G__35714;
i__35690_35698 = G__35715;
continue;
}
} else {
}
}
break;
}

var G__35716 = seq__35683;
var G__35717 = chunk__35684;
var G__35718 = count__35685;
var G__35719 = (i__35686 + (1));
seq__35683 = G__35716;
chunk__35684 = G__35717;
count__35685 = G__35718;
i__35686 = G__35719;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35683);
if(temp__4657__auto__){
var seq__35683__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35683__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35683__$1);
var G__35720 = cljs.core.chunk_rest.call(null,seq__35683__$1);
var G__35721 = c__25571__auto__;
var G__35722 = cljs.core.count.call(null,c__25571__auto__);
var G__35723 = (0);
seq__35683 = G__35720;
chunk__35684 = G__35721;
count__35685 = G__35722;
i__35686 = G__35723;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35683__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35691_35724 = cljs.core.seq.call(null,requires);
var chunk__35692_35725 = null;
var count__35693_35726 = (0);
var i__35694_35727 = (0);
while(true){
if((i__35694_35727 < count__35693_35726)){
var req_35728 = cljs.core._nth.call(null,chunk__35692_35725,i__35694_35727);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35728,prov);

var G__35729 = seq__35691_35724;
var G__35730 = chunk__35692_35725;
var G__35731 = count__35693_35726;
var G__35732 = (i__35694_35727 + (1));
seq__35691_35724 = G__35729;
chunk__35692_35725 = G__35730;
count__35693_35726 = G__35731;
i__35694_35727 = G__35732;
continue;
} else {
var temp__4657__auto___35733__$1 = cljs.core.seq.call(null,seq__35691_35724);
if(temp__4657__auto___35733__$1){
var seq__35691_35734__$1 = temp__4657__auto___35733__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35691_35734__$1)){
var c__25571__auto___35735 = cljs.core.chunk_first.call(null,seq__35691_35734__$1);
var G__35736 = cljs.core.chunk_rest.call(null,seq__35691_35734__$1);
var G__35737 = c__25571__auto___35735;
var G__35738 = cljs.core.count.call(null,c__25571__auto___35735);
var G__35739 = (0);
seq__35691_35724 = G__35736;
chunk__35692_35725 = G__35737;
count__35693_35726 = G__35738;
i__35694_35727 = G__35739;
continue;
} else {
var req_35740 = cljs.core.first.call(null,seq__35691_35734__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35740,prov);

var G__35741 = cljs.core.next.call(null,seq__35691_35734__$1);
var G__35742 = null;
var G__35743 = (0);
var G__35744 = (0);
seq__35691_35724 = G__35741;
chunk__35692_35725 = G__35742;
count__35693_35726 = G__35743;
i__35694_35727 = G__35744;
continue;
}
} else {
}
}
break;
}

var G__35745 = cljs.core.next.call(null,seq__35683__$1);
var G__35746 = null;
var G__35747 = (0);
var G__35748 = (0);
seq__35683 = G__35745;
chunk__35684 = G__35746;
count__35685 = G__35747;
i__35686 = G__35748;
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
var seq__35753_35757 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35754_35758 = null;
var count__35755_35759 = (0);
var i__35756_35760 = (0);
while(true){
if((i__35756_35760 < count__35755_35759)){
var ns_35761 = cljs.core._nth.call(null,chunk__35754_35758,i__35756_35760);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35761);

var G__35762 = seq__35753_35757;
var G__35763 = chunk__35754_35758;
var G__35764 = count__35755_35759;
var G__35765 = (i__35756_35760 + (1));
seq__35753_35757 = G__35762;
chunk__35754_35758 = G__35763;
count__35755_35759 = G__35764;
i__35756_35760 = G__35765;
continue;
} else {
var temp__4657__auto___35766 = cljs.core.seq.call(null,seq__35753_35757);
if(temp__4657__auto___35766){
var seq__35753_35767__$1 = temp__4657__auto___35766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35753_35767__$1)){
var c__25571__auto___35768 = cljs.core.chunk_first.call(null,seq__35753_35767__$1);
var G__35769 = cljs.core.chunk_rest.call(null,seq__35753_35767__$1);
var G__35770 = c__25571__auto___35768;
var G__35771 = cljs.core.count.call(null,c__25571__auto___35768);
var G__35772 = (0);
seq__35753_35757 = G__35769;
chunk__35754_35758 = G__35770;
count__35755_35759 = G__35771;
i__35756_35760 = G__35772;
continue;
} else {
var ns_35773 = cljs.core.first.call(null,seq__35753_35767__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35773);

var G__35774 = cljs.core.next.call(null,seq__35753_35767__$1);
var G__35775 = null;
var G__35776 = (0);
var G__35777 = (0);
seq__35753_35757 = G__35774;
chunk__35754_35758 = G__35775;
count__35755_35759 = G__35776;
i__35756_35760 = G__35777;
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
var G__35778__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35779__i = 0, G__35779__a = new Array(arguments.length -  0);
while (G__35779__i < G__35779__a.length) {G__35779__a[G__35779__i] = arguments[G__35779__i + 0]; ++G__35779__i;}
  args = new cljs.core.IndexedSeq(G__35779__a,0);
} 
return G__35778__delegate.call(this,args);};
G__35778.cljs$lang$maxFixedArity = 0;
G__35778.cljs$lang$applyTo = (function (arglist__35780){
var args = cljs.core.seq(arglist__35780);
return G__35778__delegate(args);
});
G__35778.cljs$core$IFn$_invoke$arity$variadic = G__35778__delegate;
return G__35778;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35782 = cljs.core._EQ_;
var expr__35783 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35782.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35783))){
var path_parts = ((function (pred__35782,expr__35783){
return (function (p1__35781_SHARP_){
return clojure.string.split.call(null,p1__35781_SHARP_,/[\/\\]/);
});})(pred__35782,expr__35783))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35782,expr__35783){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35785){if((e35785 instanceof Error)){
var e = e35785;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35785;

}
}})());
});
;})(path_parts,sep,root,pred__35782,expr__35783))
} else {
if(cljs.core.truth_(pred__35782.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35783))){
return ((function (pred__35782,expr__35783){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35782,expr__35783){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35782,expr__35783))
);

return deferred.addErrback(((function (deferred,pred__35782,expr__35783){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35782,expr__35783))
);
});
;})(pred__35782,expr__35783))
} else {
return ((function (pred__35782,expr__35783){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35782,expr__35783))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35786,callback){
var map__35789 = p__35786;
var map__35789__$1 = ((((!((map__35789 == null)))?((((map__35789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35789):map__35789);
var file_msg = map__35789__$1;
var request_url = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35789,map__35789__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35789,map__35789__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_35813){
var state_val_35814 = (state_35813[(1)]);
if((state_val_35814 === (7))){
var inst_35809 = (state_35813[(2)]);
var state_35813__$1 = state_35813;
var statearr_35815_35835 = state_35813__$1;
(statearr_35815_35835[(2)] = inst_35809);

(statearr_35815_35835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35814 === (1))){
var state_35813__$1 = state_35813;
var statearr_35816_35836 = state_35813__$1;
(statearr_35816_35836[(2)] = null);

(statearr_35816_35836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35814 === (4))){
var inst_35793 = (state_35813[(7)]);
var inst_35793__$1 = (state_35813[(2)]);
var state_35813__$1 = (function (){var statearr_35817 = state_35813;
(statearr_35817[(7)] = inst_35793__$1);

return statearr_35817;
})();
if(cljs.core.truth_(inst_35793__$1)){
var statearr_35818_35837 = state_35813__$1;
(statearr_35818_35837[(1)] = (5));

} else {
var statearr_35819_35838 = state_35813__$1;
(statearr_35819_35838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35814 === (6))){
var state_35813__$1 = state_35813;
var statearr_35820_35839 = state_35813__$1;
(statearr_35820_35839[(2)] = null);

(statearr_35820_35839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35814 === (3))){
var inst_35811 = (state_35813[(2)]);
var state_35813__$1 = state_35813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35813__$1,inst_35811);
} else {
if((state_val_35814 === (2))){
var state_35813__$1 = state_35813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35813__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35814 === (11))){
var inst_35805 = (state_35813[(2)]);
var state_35813__$1 = (function (){var statearr_35821 = state_35813;
(statearr_35821[(8)] = inst_35805);

return statearr_35821;
})();
var statearr_35822_35840 = state_35813__$1;
(statearr_35822_35840[(2)] = null);

(statearr_35822_35840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35814 === (9))){
var inst_35797 = (state_35813[(9)]);
var inst_35799 = (state_35813[(10)]);
var inst_35801 = inst_35799.call(null,inst_35797);
var state_35813__$1 = state_35813;
var statearr_35823_35841 = state_35813__$1;
(statearr_35823_35841[(2)] = inst_35801);

(statearr_35823_35841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35814 === (5))){
var inst_35793 = (state_35813[(7)]);
var inst_35795 = figwheel.client.file_reloading.blocking_load.call(null,inst_35793);
var state_35813__$1 = state_35813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35813__$1,(8),inst_35795);
} else {
if((state_val_35814 === (10))){
var inst_35797 = (state_35813[(9)]);
var inst_35803 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35797);
var state_35813__$1 = state_35813;
var statearr_35824_35842 = state_35813__$1;
(statearr_35824_35842[(2)] = inst_35803);

(statearr_35824_35842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35814 === (8))){
var inst_35793 = (state_35813[(7)]);
var inst_35799 = (state_35813[(10)]);
var inst_35797 = (state_35813[(2)]);
var inst_35798 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35799__$1 = cljs.core.get.call(null,inst_35798,inst_35793);
var state_35813__$1 = (function (){var statearr_35825 = state_35813;
(statearr_35825[(9)] = inst_35797);

(statearr_35825[(10)] = inst_35799__$1);

return statearr_35825;
})();
if(cljs.core.truth_(inst_35799__$1)){
var statearr_35826_35843 = state_35813__$1;
(statearr_35826_35843[(1)] = (9));

} else {
var statearr_35827_35844 = state_35813__$1;
(statearr_35827_35844[(1)] = (10));

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
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$state_machine__28466__auto____0 = (function (){
var statearr_35831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35831[(0)] = figwheel$client$file_reloading$state_machine__28466__auto__);

(statearr_35831[(1)] = (1));

return statearr_35831;
});
var figwheel$client$file_reloading$state_machine__28466__auto____1 = (function (state_35813){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35832){if((e35832 instanceof Object)){
var ex__28469__auto__ = e35832;
var statearr_35833_35845 = state_35813;
(statearr_35833_35845[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35846 = state_35813;
state_35813 = G__35846;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28466__auto__ = function(state_35813){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28466__auto____1.call(this,state_35813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28466__auto____0;
figwheel$client$file_reloading$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28466__auto____1;
return figwheel$client$file_reloading$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_35834 = f__28578__auto__.call(null);
(statearr_35834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35847,callback){
var map__35850 = p__35847;
var map__35850__$1 = ((((!((map__35850 == null)))?((((map__35850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35850):map__35850);
var file_msg = map__35850__$1;
var namespace = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35850,map__35850__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35850,map__35850__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35852){
var map__35855 = p__35852;
var map__35855__$1 = ((((!((map__35855 == null)))?((((map__35855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35855):map__35855);
var file_msg = map__35855__$1;
var namespace = cljs.core.get.call(null,map__35855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35857,callback){
var map__35860 = p__35857;
var map__35860__$1 = ((((!((map__35860 == null)))?((((map__35860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35860):map__35860);
var file_msg = map__35860__$1;
var request_url = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28577__auto___35964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___35964,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___35964,out){
return (function (state_35946){
var state_val_35947 = (state_35946[(1)]);
if((state_val_35947 === (1))){
var inst_35920 = cljs.core.seq.call(null,files);
var inst_35921 = cljs.core.first.call(null,inst_35920);
var inst_35922 = cljs.core.next.call(null,inst_35920);
var inst_35923 = files;
var state_35946__$1 = (function (){var statearr_35948 = state_35946;
(statearr_35948[(7)] = inst_35921);

(statearr_35948[(8)] = inst_35923);

(statearr_35948[(9)] = inst_35922);

return statearr_35948;
})();
var statearr_35949_35965 = state_35946__$1;
(statearr_35949_35965[(2)] = null);

(statearr_35949_35965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (2))){
var inst_35923 = (state_35946[(8)]);
var inst_35929 = (state_35946[(10)]);
var inst_35928 = cljs.core.seq.call(null,inst_35923);
var inst_35929__$1 = cljs.core.first.call(null,inst_35928);
var inst_35930 = cljs.core.next.call(null,inst_35928);
var inst_35931 = (inst_35929__$1 == null);
var inst_35932 = cljs.core.not.call(null,inst_35931);
var state_35946__$1 = (function (){var statearr_35950 = state_35946;
(statearr_35950[(10)] = inst_35929__$1);

(statearr_35950[(11)] = inst_35930);

return statearr_35950;
})();
if(inst_35932){
var statearr_35951_35966 = state_35946__$1;
(statearr_35951_35966[(1)] = (4));

} else {
var statearr_35952_35967 = state_35946__$1;
(statearr_35952_35967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (3))){
var inst_35944 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35946__$1,inst_35944);
} else {
if((state_val_35947 === (4))){
var inst_35929 = (state_35946[(10)]);
var inst_35934 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35929);
var state_35946__$1 = state_35946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35946__$1,(7),inst_35934);
} else {
if((state_val_35947 === (5))){
var inst_35940 = cljs.core.async.close_BANG_.call(null,out);
var state_35946__$1 = state_35946;
var statearr_35953_35968 = state_35946__$1;
(statearr_35953_35968[(2)] = inst_35940);

(statearr_35953_35968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (6))){
var inst_35942 = (state_35946[(2)]);
var state_35946__$1 = state_35946;
var statearr_35954_35969 = state_35946__$1;
(statearr_35954_35969[(2)] = inst_35942);

(statearr_35954_35969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35947 === (7))){
var inst_35930 = (state_35946[(11)]);
var inst_35936 = (state_35946[(2)]);
var inst_35937 = cljs.core.async.put_BANG_.call(null,out,inst_35936);
var inst_35923 = inst_35930;
var state_35946__$1 = (function (){var statearr_35955 = state_35946;
(statearr_35955[(8)] = inst_35923);

(statearr_35955[(12)] = inst_35937);

return statearr_35955;
})();
var statearr_35956_35970 = state_35946__$1;
(statearr_35956_35970[(2)] = null);

(statearr_35956_35970[(1)] = (2));


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
});})(c__28577__auto___35964,out))
;
return ((function (switch__28465__auto__,c__28577__auto___35964,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0 = (function (){
var statearr_35960 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35960[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__);

(statearr_35960[(1)] = (1));

return statearr_35960;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1 = (function (state_35946){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35961){if((e35961 instanceof Object)){
var ex__28469__auto__ = e35961;
var statearr_35962_35971 = state_35946;
(statearr_35962_35971[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35972 = state_35946;
state_35946 = G__35972;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__ = function(state_35946){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1.call(this,state_35946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___35964,out))
})();
var state__28579__auto__ = (function (){var statearr_35963 = f__28578__auto__.call(null);
(statearr_35963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___35964);

return statearr_35963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___35964,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35973,opts){
var map__35977 = p__35973;
var map__35977__$1 = ((((!((map__35977 == null)))?((((map__35977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35977):map__35977);
var eval_body__$1 = cljs.core.get.call(null,map__35977__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35977__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35979){var e = e35979;
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
return (function (p1__35980_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35980_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35989){
var vec__35990 = p__35989;
var k = cljs.core.nth.call(null,vec__35990,(0),null);
var v = cljs.core.nth.call(null,vec__35990,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35993){
var vec__35994 = p__35993;
var k = cljs.core.nth.call(null,vec__35994,(0),null);
var v = cljs.core.nth.call(null,vec__35994,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36000,p__36001){
var map__36248 = p__36000;
var map__36248__$1 = ((((!((map__36248 == null)))?((((map__36248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36248):map__36248);
var opts = map__36248__$1;
var before_jsload = cljs.core.get.call(null,map__36248__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36248__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36248__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36249 = p__36001;
var map__36249__$1 = ((((!((map__36249 == null)))?((((map__36249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36249):map__36249);
var msg = map__36249__$1;
var files = cljs.core.get.call(null,map__36249__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36249__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36249__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36402){
var state_val_36403 = (state_36402[(1)]);
if((state_val_36403 === (7))){
var inst_36263 = (state_36402[(7)]);
var inst_36266 = (state_36402[(8)]);
var inst_36264 = (state_36402[(9)]);
var inst_36265 = (state_36402[(10)]);
var inst_36271 = cljs.core._nth.call(null,inst_36264,inst_36266);
var inst_36272 = figwheel.client.file_reloading.eval_body.call(null,inst_36271,opts);
var inst_36273 = (inst_36266 + (1));
var tmp36404 = inst_36263;
var tmp36405 = inst_36264;
var tmp36406 = inst_36265;
var inst_36263__$1 = tmp36404;
var inst_36264__$1 = tmp36405;
var inst_36265__$1 = tmp36406;
var inst_36266__$1 = inst_36273;
var state_36402__$1 = (function (){var statearr_36407 = state_36402;
(statearr_36407[(7)] = inst_36263__$1);

(statearr_36407[(8)] = inst_36266__$1);

(statearr_36407[(9)] = inst_36264__$1);

(statearr_36407[(10)] = inst_36265__$1);

(statearr_36407[(11)] = inst_36272);

return statearr_36407;
})();
var statearr_36408_36494 = state_36402__$1;
(statearr_36408_36494[(2)] = null);

(statearr_36408_36494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (20))){
var inst_36306 = (state_36402[(12)]);
var inst_36314 = figwheel.client.file_reloading.sort_files.call(null,inst_36306);
var state_36402__$1 = state_36402;
var statearr_36409_36495 = state_36402__$1;
(statearr_36409_36495[(2)] = inst_36314);

(statearr_36409_36495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (27))){
var state_36402__$1 = state_36402;
var statearr_36410_36496 = state_36402__$1;
(statearr_36410_36496[(2)] = null);

(statearr_36410_36496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (1))){
var inst_36255 = (state_36402[(13)]);
var inst_36252 = before_jsload.call(null,files);
var inst_36253 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36254 = (function (){return ((function (inst_36255,inst_36252,inst_36253,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35997_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35997_SHARP_);
});
;})(inst_36255,inst_36252,inst_36253,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36255__$1 = cljs.core.filter.call(null,inst_36254,files);
var inst_36256 = cljs.core.not_empty.call(null,inst_36255__$1);
var state_36402__$1 = (function (){var statearr_36411 = state_36402;
(statearr_36411[(14)] = inst_36252);

(statearr_36411[(13)] = inst_36255__$1);

(statearr_36411[(15)] = inst_36253);

return statearr_36411;
})();
if(cljs.core.truth_(inst_36256)){
var statearr_36412_36497 = state_36402__$1;
(statearr_36412_36497[(1)] = (2));

} else {
var statearr_36413_36498 = state_36402__$1;
(statearr_36413_36498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (24))){
var state_36402__$1 = state_36402;
var statearr_36414_36499 = state_36402__$1;
(statearr_36414_36499[(2)] = null);

(statearr_36414_36499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (39))){
var inst_36356 = (state_36402[(16)]);
var state_36402__$1 = state_36402;
var statearr_36415_36500 = state_36402__$1;
(statearr_36415_36500[(2)] = inst_36356);

(statearr_36415_36500[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (46))){
var inst_36397 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36416_36501 = state_36402__$1;
(statearr_36416_36501[(2)] = inst_36397);

(statearr_36416_36501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (4))){
var inst_36300 = (state_36402[(2)]);
var inst_36301 = cljs.core.List.EMPTY;
var inst_36302 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36301);
var inst_36303 = (function (){return ((function (inst_36300,inst_36301,inst_36302,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35998_SHARP_){
var and__24748__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35998_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35998_SHARP_));
} else {
return and__24748__auto__;
}
});
;})(inst_36300,inst_36301,inst_36302,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36304 = cljs.core.filter.call(null,inst_36303,files);
var inst_36305 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36306 = cljs.core.concat.call(null,inst_36304,inst_36305);
var state_36402__$1 = (function (){var statearr_36417 = state_36402;
(statearr_36417[(17)] = inst_36302);

(statearr_36417[(12)] = inst_36306);

(statearr_36417[(18)] = inst_36300);

return statearr_36417;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36418_36502 = state_36402__$1;
(statearr_36418_36502[(1)] = (16));

} else {
var statearr_36419_36503 = state_36402__$1;
(statearr_36419_36503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (15))){
var inst_36290 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36420_36504 = state_36402__$1;
(statearr_36420_36504[(2)] = inst_36290);

(statearr_36420_36504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (21))){
var inst_36316 = (state_36402[(19)]);
var inst_36316__$1 = (state_36402[(2)]);
var inst_36317 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36316__$1);
var state_36402__$1 = (function (){var statearr_36421 = state_36402;
(statearr_36421[(19)] = inst_36316__$1);

return statearr_36421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(22),inst_36317);
} else {
if((state_val_36403 === (31))){
var inst_36400 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36402__$1,inst_36400);
} else {
if((state_val_36403 === (32))){
var inst_36356 = (state_36402[(16)]);
var inst_36361 = inst_36356.cljs$lang$protocol_mask$partition0$;
var inst_36362 = (inst_36361 & (64));
var inst_36363 = inst_36356.cljs$core$ISeq$;
var inst_36364 = (inst_36362) || (inst_36363);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36364)){
var statearr_36422_36505 = state_36402__$1;
(statearr_36422_36505[(1)] = (35));

} else {
var statearr_36423_36506 = state_36402__$1;
(statearr_36423_36506[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (40))){
var inst_36377 = (state_36402[(20)]);
var inst_36376 = (state_36402[(2)]);
var inst_36377__$1 = cljs.core.get.call(null,inst_36376,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36378 = cljs.core.get.call(null,inst_36376,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36379 = cljs.core.not_empty.call(null,inst_36377__$1);
var state_36402__$1 = (function (){var statearr_36424 = state_36402;
(statearr_36424[(21)] = inst_36378);

(statearr_36424[(20)] = inst_36377__$1);

return statearr_36424;
})();
if(cljs.core.truth_(inst_36379)){
var statearr_36425_36507 = state_36402__$1;
(statearr_36425_36507[(1)] = (41));

} else {
var statearr_36426_36508 = state_36402__$1;
(statearr_36426_36508[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (33))){
var state_36402__$1 = state_36402;
var statearr_36427_36509 = state_36402__$1;
(statearr_36427_36509[(2)] = false);

(statearr_36427_36509[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (13))){
var inst_36276 = (state_36402[(22)]);
var inst_36280 = cljs.core.chunk_first.call(null,inst_36276);
var inst_36281 = cljs.core.chunk_rest.call(null,inst_36276);
var inst_36282 = cljs.core.count.call(null,inst_36280);
var inst_36263 = inst_36281;
var inst_36264 = inst_36280;
var inst_36265 = inst_36282;
var inst_36266 = (0);
var state_36402__$1 = (function (){var statearr_36428 = state_36402;
(statearr_36428[(7)] = inst_36263);

(statearr_36428[(8)] = inst_36266);

(statearr_36428[(9)] = inst_36264);

(statearr_36428[(10)] = inst_36265);

return statearr_36428;
})();
var statearr_36429_36510 = state_36402__$1;
(statearr_36429_36510[(2)] = null);

(statearr_36429_36510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (22))){
var inst_36324 = (state_36402[(23)]);
var inst_36320 = (state_36402[(24)]);
var inst_36319 = (state_36402[(25)]);
var inst_36316 = (state_36402[(19)]);
var inst_36319__$1 = (state_36402[(2)]);
var inst_36320__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36319__$1);
var inst_36321 = (function (){var all_files = inst_36316;
var res_SINGLEQUOTE_ = inst_36319__$1;
var res = inst_36320__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36324,inst_36320,inst_36319,inst_36316,inst_36319__$1,inst_36320__$1,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35999_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35999_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36324,inst_36320,inst_36319,inst_36316,inst_36319__$1,inst_36320__$1,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36322 = cljs.core.filter.call(null,inst_36321,inst_36319__$1);
var inst_36323 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36324__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36323);
var inst_36325 = cljs.core.not_empty.call(null,inst_36324__$1);
var state_36402__$1 = (function (){var statearr_36430 = state_36402;
(statearr_36430[(23)] = inst_36324__$1);

(statearr_36430[(24)] = inst_36320__$1);

(statearr_36430[(25)] = inst_36319__$1);

(statearr_36430[(26)] = inst_36322);

return statearr_36430;
})();
if(cljs.core.truth_(inst_36325)){
var statearr_36431_36511 = state_36402__$1;
(statearr_36431_36511[(1)] = (23));

} else {
var statearr_36432_36512 = state_36402__$1;
(statearr_36432_36512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (36))){
var state_36402__$1 = state_36402;
var statearr_36433_36513 = state_36402__$1;
(statearr_36433_36513[(2)] = false);

(statearr_36433_36513[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (41))){
var inst_36377 = (state_36402[(20)]);
var inst_36381 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36382 = cljs.core.map.call(null,inst_36381,inst_36377);
var inst_36383 = cljs.core.pr_str.call(null,inst_36382);
var inst_36384 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36383)].join('');
var inst_36385 = figwheel.client.utils.log.call(null,inst_36384);
var state_36402__$1 = state_36402;
var statearr_36434_36514 = state_36402__$1;
(statearr_36434_36514[(2)] = inst_36385);

(statearr_36434_36514[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (43))){
var inst_36378 = (state_36402[(21)]);
var inst_36388 = (state_36402[(2)]);
var inst_36389 = cljs.core.not_empty.call(null,inst_36378);
var state_36402__$1 = (function (){var statearr_36435 = state_36402;
(statearr_36435[(27)] = inst_36388);

return statearr_36435;
})();
if(cljs.core.truth_(inst_36389)){
var statearr_36436_36515 = state_36402__$1;
(statearr_36436_36515[(1)] = (44));

} else {
var statearr_36437_36516 = state_36402__$1;
(statearr_36437_36516[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (29))){
var inst_36324 = (state_36402[(23)]);
var inst_36320 = (state_36402[(24)]);
var inst_36356 = (state_36402[(16)]);
var inst_36319 = (state_36402[(25)]);
var inst_36322 = (state_36402[(26)]);
var inst_36316 = (state_36402[(19)]);
var inst_36352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36355 = (function (){var all_files = inst_36316;
var res_SINGLEQUOTE_ = inst_36319;
var res = inst_36320;
var files_not_loaded = inst_36322;
var dependencies_that_loaded = inst_36324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36356,inst_36319,inst_36322,inst_36316,inst_36352,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36354){
var map__36438 = p__36354;
var map__36438__$1 = ((((!((map__36438 == null)))?((((map__36438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36438):map__36438);
var namespace = cljs.core.get.call(null,map__36438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36356,inst_36319,inst_36322,inst_36316,inst_36352,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36356__$1 = cljs.core.group_by.call(null,inst_36355,inst_36322);
var inst_36358 = (inst_36356__$1 == null);
var inst_36359 = cljs.core.not.call(null,inst_36358);
var state_36402__$1 = (function (){var statearr_36440 = state_36402;
(statearr_36440[(16)] = inst_36356__$1);

(statearr_36440[(28)] = inst_36352);

return statearr_36440;
})();
if(inst_36359){
var statearr_36441_36517 = state_36402__$1;
(statearr_36441_36517[(1)] = (32));

} else {
var statearr_36442_36518 = state_36402__$1;
(statearr_36442_36518[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (44))){
var inst_36378 = (state_36402[(21)]);
var inst_36391 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36378);
var inst_36392 = cljs.core.pr_str.call(null,inst_36391);
var inst_36393 = [cljs.core.str("not required: "),cljs.core.str(inst_36392)].join('');
var inst_36394 = figwheel.client.utils.log.call(null,inst_36393);
var state_36402__$1 = state_36402;
var statearr_36443_36519 = state_36402__$1;
(statearr_36443_36519[(2)] = inst_36394);

(statearr_36443_36519[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (6))){
var inst_36297 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36444_36520 = state_36402__$1;
(statearr_36444_36520[(2)] = inst_36297);

(statearr_36444_36520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (28))){
var inst_36322 = (state_36402[(26)]);
var inst_36349 = (state_36402[(2)]);
var inst_36350 = cljs.core.not_empty.call(null,inst_36322);
var state_36402__$1 = (function (){var statearr_36445 = state_36402;
(statearr_36445[(29)] = inst_36349);

return statearr_36445;
})();
if(cljs.core.truth_(inst_36350)){
var statearr_36446_36521 = state_36402__$1;
(statearr_36446_36521[(1)] = (29));

} else {
var statearr_36447_36522 = state_36402__$1;
(statearr_36447_36522[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (25))){
var inst_36320 = (state_36402[(24)]);
var inst_36336 = (state_36402[(2)]);
var inst_36337 = cljs.core.not_empty.call(null,inst_36320);
var state_36402__$1 = (function (){var statearr_36448 = state_36402;
(statearr_36448[(30)] = inst_36336);

return statearr_36448;
})();
if(cljs.core.truth_(inst_36337)){
var statearr_36449_36523 = state_36402__$1;
(statearr_36449_36523[(1)] = (26));

} else {
var statearr_36450_36524 = state_36402__$1;
(statearr_36450_36524[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (34))){
var inst_36371 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36371)){
var statearr_36451_36525 = state_36402__$1;
(statearr_36451_36525[(1)] = (38));

} else {
var statearr_36452_36526 = state_36402__$1;
(statearr_36452_36526[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (17))){
var state_36402__$1 = state_36402;
var statearr_36453_36527 = state_36402__$1;
(statearr_36453_36527[(2)] = recompile_dependents);

(statearr_36453_36527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (3))){
var state_36402__$1 = state_36402;
var statearr_36454_36528 = state_36402__$1;
(statearr_36454_36528[(2)] = null);

(statearr_36454_36528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (12))){
var inst_36293 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36455_36529 = state_36402__$1;
(statearr_36455_36529[(2)] = inst_36293);

(statearr_36455_36529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (2))){
var inst_36255 = (state_36402[(13)]);
var inst_36262 = cljs.core.seq.call(null,inst_36255);
var inst_36263 = inst_36262;
var inst_36264 = null;
var inst_36265 = (0);
var inst_36266 = (0);
var state_36402__$1 = (function (){var statearr_36456 = state_36402;
(statearr_36456[(7)] = inst_36263);

(statearr_36456[(8)] = inst_36266);

(statearr_36456[(9)] = inst_36264);

(statearr_36456[(10)] = inst_36265);

return statearr_36456;
})();
var statearr_36457_36530 = state_36402__$1;
(statearr_36457_36530[(2)] = null);

(statearr_36457_36530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (23))){
var inst_36324 = (state_36402[(23)]);
var inst_36320 = (state_36402[(24)]);
var inst_36319 = (state_36402[(25)]);
var inst_36322 = (state_36402[(26)]);
var inst_36316 = (state_36402[(19)]);
var inst_36327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36329 = (function (){var all_files = inst_36316;
var res_SINGLEQUOTE_ = inst_36319;
var res = inst_36320;
var files_not_loaded = inst_36322;
var dependencies_that_loaded = inst_36324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36319,inst_36322,inst_36316,inst_36327,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36328){
var map__36458 = p__36328;
var map__36458__$1 = ((((!((map__36458 == null)))?((((map__36458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36458):map__36458);
var request_url = cljs.core.get.call(null,map__36458__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36319,inst_36322,inst_36316,inst_36327,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36330 = cljs.core.reverse.call(null,inst_36324);
var inst_36331 = cljs.core.map.call(null,inst_36329,inst_36330);
var inst_36332 = cljs.core.pr_str.call(null,inst_36331);
var inst_36333 = figwheel.client.utils.log.call(null,inst_36332);
var state_36402__$1 = (function (){var statearr_36460 = state_36402;
(statearr_36460[(31)] = inst_36327);

return statearr_36460;
})();
var statearr_36461_36531 = state_36402__$1;
(statearr_36461_36531[(2)] = inst_36333);

(statearr_36461_36531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (35))){
var state_36402__$1 = state_36402;
var statearr_36462_36532 = state_36402__$1;
(statearr_36462_36532[(2)] = true);

(statearr_36462_36532[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (19))){
var inst_36306 = (state_36402[(12)]);
var inst_36312 = figwheel.client.file_reloading.expand_files.call(null,inst_36306);
var state_36402__$1 = state_36402;
var statearr_36463_36533 = state_36402__$1;
(statearr_36463_36533[(2)] = inst_36312);

(statearr_36463_36533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (11))){
var state_36402__$1 = state_36402;
var statearr_36464_36534 = state_36402__$1;
(statearr_36464_36534[(2)] = null);

(statearr_36464_36534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (9))){
var inst_36295 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36465_36535 = state_36402__$1;
(statearr_36465_36535[(2)] = inst_36295);

(statearr_36465_36535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (5))){
var inst_36266 = (state_36402[(8)]);
var inst_36265 = (state_36402[(10)]);
var inst_36268 = (inst_36266 < inst_36265);
var inst_36269 = inst_36268;
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36269)){
var statearr_36466_36536 = state_36402__$1;
(statearr_36466_36536[(1)] = (7));

} else {
var statearr_36467_36537 = state_36402__$1;
(statearr_36467_36537[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (14))){
var inst_36276 = (state_36402[(22)]);
var inst_36285 = cljs.core.first.call(null,inst_36276);
var inst_36286 = figwheel.client.file_reloading.eval_body.call(null,inst_36285,opts);
var inst_36287 = cljs.core.next.call(null,inst_36276);
var inst_36263 = inst_36287;
var inst_36264 = null;
var inst_36265 = (0);
var inst_36266 = (0);
var state_36402__$1 = (function (){var statearr_36468 = state_36402;
(statearr_36468[(7)] = inst_36263);

(statearr_36468[(32)] = inst_36286);

(statearr_36468[(8)] = inst_36266);

(statearr_36468[(9)] = inst_36264);

(statearr_36468[(10)] = inst_36265);

return statearr_36468;
})();
var statearr_36469_36538 = state_36402__$1;
(statearr_36469_36538[(2)] = null);

(statearr_36469_36538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (45))){
var state_36402__$1 = state_36402;
var statearr_36470_36539 = state_36402__$1;
(statearr_36470_36539[(2)] = null);

(statearr_36470_36539[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (26))){
var inst_36324 = (state_36402[(23)]);
var inst_36320 = (state_36402[(24)]);
var inst_36319 = (state_36402[(25)]);
var inst_36322 = (state_36402[(26)]);
var inst_36316 = (state_36402[(19)]);
var inst_36339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36341 = (function (){var all_files = inst_36316;
var res_SINGLEQUOTE_ = inst_36319;
var res = inst_36320;
var files_not_loaded = inst_36322;
var dependencies_that_loaded = inst_36324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36319,inst_36322,inst_36316,inst_36339,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36340){
var map__36471 = p__36340;
var map__36471__$1 = ((((!((map__36471 == null)))?((((map__36471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36471):map__36471);
var namespace = cljs.core.get.call(null,map__36471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36319,inst_36322,inst_36316,inst_36339,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36342 = cljs.core.map.call(null,inst_36341,inst_36320);
var inst_36343 = cljs.core.pr_str.call(null,inst_36342);
var inst_36344 = figwheel.client.utils.log.call(null,inst_36343);
var inst_36345 = (function (){var all_files = inst_36316;
var res_SINGLEQUOTE_ = inst_36319;
var res = inst_36320;
var files_not_loaded = inst_36322;
var dependencies_that_loaded = inst_36324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36319,inst_36322,inst_36316,inst_36339,inst_36341,inst_36342,inst_36343,inst_36344,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36324,inst_36320,inst_36319,inst_36322,inst_36316,inst_36339,inst_36341,inst_36342,inst_36343,inst_36344,state_val_36403,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36346 = setTimeout(inst_36345,(10));
var state_36402__$1 = (function (){var statearr_36473 = state_36402;
(statearr_36473[(33)] = inst_36339);

(statearr_36473[(34)] = inst_36344);

return statearr_36473;
})();
var statearr_36474_36540 = state_36402__$1;
(statearr_36474_36540[(2)] = inst_36346);

(statearr_36474_36540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (16))){
var state_36402__$1 = state_36402;
var statearr_36475_36541 = state_36402__$1;
(statearr_36475_36541[(2)] = reload_dependents);

(statearr_36475_36541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (38))){
var inst_36356 = (state_36402[(16)]);
var inst_36373 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36356);
var state_36402__$1 = state_36402;
var statearr_36476_36542 = state_36402__$1;
(statearr_36476_36542[(2)] = inst_36373);

(statearr_36476_36542[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (30))){
var state_36402__$1 = state_36402;
var statearr_36477_36543 = state_36402__$1;
(statearr_36477_36543[(2)] = null);

(statearr_36477_36543[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (10))){
var inst_36276 = (state_36402[(22)]);
var inst_36278 = cljs.core.chunked_seq_QMARK_.call(null,inst_36276);
var state_36402__$1 = state_36402;
if(inst_36278){
var statearr_36478_36544 = state_36402__$1;
(statearr_36478_36544[(1)] = (13));

} else {
var statearr_36479_36545 = state_36402__$1;
(statearr_36479_36545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (18))){
var inst_36310 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36310)){
var statearr_36480_36546 = state_36402__$1;
(statearr_36480_36546[(1)] = (19));

} else {
var statearr_36481_36547 = state_36402__$1;
(statearr_36481_36547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (42))){
var state_36402__$1 = state_36402;
var statearr_36482_36548 = state_36402__$1;
(statearr_36482_36548[(2)] = null);

(statearr_36482_36548[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (37))){
var inst_36368 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36483_36549 = state_36402__$1;
(statearr_36483_36549[(2)] = inst_36368);

(statearr_36483_36549[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (8))){
var inst_36263 = (state_36402[(7)]);
var inst_36276 = (state_36402[(22)]);
var inst_36276__$1 = cljs.core.seq.call(null,inst_36263);
var state_36402__$1 = (function (){var statearr_36484 = state_36402;
(statearr_36484[(22)] = inst_36276__$1);

return statearr_36484;
})();
if(inst_36276__$1){
var statearr_36485_36550 = state_36402__$1;
(statearr_36485_36550[(1)] = (10));

} else {
var statearr_36486_36551 = state_36402__$1;
(statearr_36486_36551[(1)] = (11));

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
});})(c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28465__auto__,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0 = (function (){
var statearr_36490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36490[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__);

(statearr_36490[(1)] = (1));

return statearr_36490;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1 = (function (state_36402){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_36402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e36491){if((e36491 instanceof Object)){
var ex__28469__auto__ = e36491;
var statearr_36492_36552 = state_36402;
(statearr_36492_36552[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36553 = state_36402;
state_36402 = G__36553;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__ = function(state_36402){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1.call(this,state_36402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28579__auto__ = (function (){var statearr_36493 = f__28578__auto__.call(null);
(statearr_36493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_36493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,map__36248,map__36248__$1,opts,before_jsload,on_jsload,reload_dependents,map__36249,map__36249__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36556,link){
var map__36559 = p__36556;
var map__36559__$1 = ((((!((map__36559 == null)))?((((map__36559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36559):map__36559);
var file = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36559,map__36559__$1,file){
return (function (p1__36554_SHARP_,p2__36555_SHARP_){
if(cljs.core._EQ_.call(null,p1__36554_SHARP_,p2__36555_SHARP_)){
return p1__36554_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36559,map__36559__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36565){
var map__36566 = p__36565;
var map__36566__$1 = ((((!((map__36566 == null)))?((((map__36566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36566):map__36566);
var match_length = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36561_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36561_SHARP_);
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
var args36568 = [];
var len__25835__auto___36571 = arguments.length;
var i__25836__auto___36572 = (0);
while(true){
if((i__25836__auto___36572 < len__25835__auto___36571)){
args36568.push((arguments[i__25836__auto___36572]));

var G__36573 = (i__25836__auto___36572 + (1));
i__25836__auto___36572 = G__36573;
continue;
} else {
}
break;
}

var G__36570 = args36568.length;
switch (G__36570) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36568.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36575_SHARP_,p2__36576_SHARP_){
return cljs.core.assoc.call(null,p1__36575_SHARP_,cljs.core.get.call(null,p2__36576_SHARP_,key),p2__36576_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36577){
var map__36580 = p__36577;
var map__36580__$1 = ((((!((map__36580 == null)))?((((map__36580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36580):map__36580);
var f_data = map__36580__$1;
var file = cljs.core.get.call(null,map__36580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36582,p__36583){
var map__36592 = p__36582;
var map__36592__$1 = ((((!((map__36592 == null)))?((((map__36592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36592):map__36592);
var opts = map__36592__$1;
var on_cssload = cljs.core.get.call(null,map__36592__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36593 = p__36583;
var map__36593__$1 = ((((!((map__36593 == null)))?((((map__36593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36593):map__36593);
var files_msg = map__36593__$1;
var files = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36596_36600 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__36597_36601 = null;
var count__36598_36602 = (0);
var i__36599_36603 = (0);
while(true){
if((i__36599_36603 < count__36598_36602)){
var f_36604 = cljs.core._nth.call(null,chunk__36597_36601,i__36599_36603);
figwheel.client.file_reloading.reload_css_file.call(null,f_36604);

var G__36605 = seq__36596_36600;
var G__36606 = chunk__36597_36601;
var G__36607 = count__36598_36602;
var G__36608 = (i__36599_36603 + (1));
seq__36596_36600 = G__36605;
chunk__36597_36601 = G__36606;
count__36598_36602 = G__36607;
i__36599_36603 = G__36608;
continue;
} else {
var temp__4657__auto___36609 = cljs.core.seq.call(null,seq__36596_36600);
if(temp__4657__auto___36609){
var seq__36596_36610__$1 = temp__4657__auto___36609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36596_36610__$1)){
var c__25571__auto___36611 = cljs.core.chunk_first.call(null,seq__36596_36610__$1);
var G__36612 = cljs.core.chunk_rest.call(null,seq__36596_36610__$1);
var G__36613 = c__25571__auto___36611;
var G__36614 = cljs.core.count.call(null,c__25571__auto___36611);
var G__36615 = (0);
seq__36596_36600 = G__36612;
chunk__36597_36601 = G__36613;
count__36598_36602 = G__36614;
i__36599_36603 = G__36615;
continue;
} else {
var f_36616 = cljs.core.first.call(null,seq__36596_36610__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36616);

var G__36617 = cljs.core.next.call(null,seq__36596_36610__$1);
var G__36618 = null;
var G__36619 = (0);
var G__36620 = (0);
seq__36596_36600 = G__36617;
chunk__36597_36601 = G__36618;
count__36598_36602 = G__36619;
i__36599_36603 = G__36620;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36592,map__36592__$1,opts,on_cssload,map__36593,map__36593__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__36592,map__36592__$1,opts,on_cssload,map__36593,map__36593__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1475267982467