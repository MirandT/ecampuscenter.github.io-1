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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35619_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35619_SHARP_));
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
var seq__35624 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35625 = null;
var count__35626 = (0);
var i__35627 = (0);
while(true){
if((i__35627 < count__35626)){
var n = cljs.core._nth.call(null,chunk__35625,i__35627);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35628 = seq__35624;
var G__35629 = chunk__35625;
var G__35630 = count__35626;
var G__35631 = (i__35627 + (1));
seq__35624 = G__35628;
chunk__35625 = G__35629;
count__35626 = G__35630;
i__35627 = G__35631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35624);
if(temp__4657__auto__){
var seq__35624__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35624__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35624__$1);
var G__35632 = cljs.core.chunk_rest.call(null,seq__35624__$1);
var G__35633 = c__25571__auto__;
var G__35634 = cljs.core.count.call(null,c__25571__auto__);
var G__35635 = (0);
seq__35624 = G__35632;
chunk__35625 = G__35633;
count__35626 = G__35634;
i__35627 = G__35635;
continue;
} else {
var n = cljs.core.first.call(null,seq__35624__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35636 = cljs.core.next.call(null,seq__35624__$1);
var G__35637 = null;
var G__35638 = (0);
var G__35639 = (0);
seq__35624 = G__35636;
chunk__35625 = G__35637;
count__35626 = G__35638;
i__35627 = G__35639;
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

var seq__35690_35701 = cljs.core.seq.call(null,deps);
var chunk__35691_35702 = null;
var count__35692_35703 = (0);
var i__35693_35704 = (0);
while(true){
if((i__35693_35704 < count__35692_35703)){
var dep_35705 = cljs.core._nth.call(null,chunk__35691_35702,i__35693_35704);
topo_sort_helper_STAR_.call(null,dep_35705,(depth + (1)),state);

var G__35706 = seq__35690_35701;
var G__35707 = chunk__35691_35702;
var G__35708 = count__35692_35703;
var G__35709 = (i__35693_35704 + (1));
seq__35690_35701 = G__35706;
chunk__35691_35702 = G__35707;
count__35692_35703 = G__35708;
i__35693_35704 = G__35709;
continue;
} else {
var temp__4657__auto___35710 = cljs.core.seq.call(null,seq__35690_35701);
if(temp__4657__auto___35710){
var seq__35690_35711__$1 = temp__4657__auto___35710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35690_35711__$1)){
var c__25571__auto___35712 = cljs.core.chunk_first.call(null,seq__35690_35711__$1);
var G__35713 = cljs.core.chunk_rest.call(null,seq__35690_35711__$1);
var G__35714 = c__25571__auto___35712;
var G__35715 = cljs.core.count.call(null,c__25571__auto___35712);
var G__35716 = (0);
seq__35690_35701 = G__35713;
chunk__35691_35702 = G__35714;
count__35692_35703 = G__35715;
i__35693_35704 = G__35716;
continue;
} else {
var dep_35717 = cljs.core.first.call(null,seq__35690_35711__$1);
topo_sort_helper_STAR_.call(null,dep_35717,(depth + (1)),state);

var G__35718 = cljs.core.next.call(null,seq__35690_35711__$1);
var G__35719 = null;
var G__35720 = (0);
var G__35721 = (0);
seq__35690_35701 = G__35718;
chunk__35691_35702 = G__35719;
count__35692_35703 = G__35720;
i__35693_35704 = G__35721;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35694){
var vec__35698 = p__35694;
var seq__35699 = cljs.core.seq.call(null,vec__35698);
var first__35700 = cljs.core.first.call(null,seq__35699);
var seq__35699__$1 = cljs.core.next.call(null,seq__35699);
var x = first__35700;
var xs = seq__35699__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35698,seq__35699,first__35700,seq__35699__$1,x,xs,get_deps__$1){
return (function (p1__35640_SHARP_){
return clojure.set.difference.call(null,p1__35640_SHARP_,x);
});})(vec__35698,seq__35699,first__35700,seq__35699__$1,x,xs,get_deps__$1))
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
var seq__35734 = cljs.core.seq.call(null,provides);
var chunk__35735 = null;
var count__35736 = (0);
var i__35737 = (0);
while(true){
if((i__35737 < count__35736)){
var prov = cljs.core._nth.call(null,chunk__35735,i__35737);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35738_35746 = cljs.core.seq.call(null,requires);
var chunk__35739_35747 = null;
var count__35740_35748 = (0);
var i__35741_35749 = (0);
while(true){
if((i__35741_35749 < count__35740_35748)){
var req_35750 = cljs.core._nth.call(null,chunk__35739_35747,i__35741_35749);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35750,prov);

var G__35751 = seq__35738_35746;
var G__35752 = chunk__35739_35747;
var G__35753 = count__35740_35748;
var G__35754 = (i__35741_35749 + (1));
seq__35738_35746 = G__35751;
chunk__35739_35747 = G__35752;
count__35740_35748 = G__35753;
i__35741_35749 = G__35754;
continue;
} else {
var temp__4657__auto___35755 = cljs.core.seq.call(null,seq__35738_35746);
if(temp__4657__auto___35755){
var seq__35738_35756__$1 = temp__4657__auto___35755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35738_35756__$1)){
var c__25571__auto___35757 = cljs.core.chunk_first.call(null,seq__35738_35756__$1);
var G__35758 = cljs.core.chunk_rest.call(null,seq__35738_35756__$1);
var G__35759 = c__25571__auto___35757;
var G__35760 = cljs.core.count.call(null,c__25571__auto___35757);
var G__35761 = (0);
seq__35738_35746 = G__35758;
chunk__35739_35747 = G__35759;
count__35740_35748 = G__35760;
i__35741_35749 = G__35761;
continue;
} else {
var req_35762 = cljs.core.first.call(null,seq__35738_35756__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35762,prov);

var G__35763 = cljs.core.next.call(null,seq__35738_35756__$1);
var G__35764 = null;
var G__35765 = (0);
var G__35766 = (0);
seq__35738_35746 = G__35763;
chunk__35739_35747 = G__35764;
count__35740_35748 = G__35765;
i__35741_35749 = G__35766;
continue;
}
} else {
}
}
break;
}

var G__35767 = seq__35734;
var G__35768 = chunk__35735;
var G__35769 = count__35736;
var G__35770 = (i__35737 + (1));
seq__35734 = G__35767;
chunk__35735 = G__35768;
count__35736 = G__35769;
i__35737 = G__35770;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35734);
if(temp__4657__auto__){
var seq__35734__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35734__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35734__$1);
var G__35771 = cljs.core.chunk_rest.call(null,seq__35734__$1);
var G__35772 = c__25571__auto__;
var G__35773 = cljs.core.count.call(null,c__25571__auto__);
var G__35774 = (0);
seq__35734 = G__35771;
chunk__35735 = G__35772;
count__35736 = G__35773;
i__35737 = G__35774;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35734__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35742_35775 = cljs.core.seq.call(null,requires);
var chunk__35743_35776 = null;
var count__35744_35777 = (0);
var i__35745_35778 = (0);
while(true){
if((i__35745_35778 < count__35744_35777)){
var req_35779 = cljs.core._nth.call(null,chunk__35743_35776,i__35745_35778);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35779,prov);

var G__35780 = seq__35742_35775;
var G__35781 = chunk__35743_35776;
var G__35782 = count__35744_35777;
var G__35783 = (i__35745_35778 + (1));
seq__35742_35775 = G__35780;
chunk__35743_35776 = G__35781;
count__35744_35777 = G__35782;
i__35745_35778 = G__35783;
continue;
} else {
var temp__4657__auto___35784__$1 = cljs.core.seq.call(null,seq__35742_35775);
if(temp__4657__auto___35784__$1){
var seq__35742_35785__$1 = temp__4657__auto___35784__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35742_35785__$1)){
var c__25571__auto___35786 = cljs.core.chunk_first.call(null,seq__35742_35785__$1);
var G__35787 = cljs.core.chunk_rest.call(null,seq__35742_35785__$1);
var G__35788 = c__25571__auto___35786;
var G__35789 = cljs.core.count.call(null,c__25571__auto___35786);
var G__35790 = (0);
seq__35742_35775 = G__35787;
chunk__35743_35776 = G__35788;
count__35744_35777 = G__35789;
i__35745_35778 = G__35790;
continue;
} else {
var req_35791 = cljs.core.first.call(null,seq__35742_35785__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35791,prov);

var G__35792 = cljs.core.next.call(null,seq__35742_35785__$1);
var G__35793 = null;
var G__35794 = (0);
var G__35795 = (0);
seq__35742_35775 = G__35792;
chunk__35743_35776 = G__35793;
count__35744_35777 = G__35794;
i__35745_35778 = G__35795;
continue;
}
} else {
}
}
break;
}

var G__35796 = cljs.core.next.call(null,seq__35734__$1);
var G__35797 = null;
var G__35798 = (0);
var G__35799 = (0);
seq__35734 = G__35796;
chunk__35735 = G__35797;
count__35736 = G__35798;
i__35737 = G__35799;
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
var seq__35804_35808 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35805_35809 = null;
var count__35806_35810 = (0);
var i__35807_35811 = (0);
while(true){
if((i__35807_35811 < count__35806_35810)){
var ns_35812 = cljs.core._nth.call(null,chunk__35805_35809,i__35807_35811);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35812);

var G__35813 = seq__35804_35808;
var G__35814 = chunk__35805_35809;
var G__35815 = count__35806_35810;
var G__35816 = (i__35807_35811 + (1));
seq__35804_35808 = G__35813;
chunk__35805_35809 = G__35814;
count__35806_35810 = G__35815;
i__35807_35811 = G__35816;
continue;
} else {
var temp__4657__auto___35817 = cljs.core.seq.call(null,seq__35804_35808);
if(temp__4657__auto___35817){
var seq__35804_35818__$1 = temp__4657__auto___35817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35804_35818__$1)){
var c__25571__auto___35819 = cljs.core.chunk_first.call(null,seq__35804_35818__$1);
var G__35820 = cljs.core.chunk_rest.call(null,seq__35804_35818__$1);
var G__35821 = c__25571__auto___35819;
var G__35822 = cljs.core.count.call(null,c__25571__auto___35819);
var G__35823 = (0);
seq__35804_35808 = G__35820;
chunk__35805_35809 = G__35821;
count__35806_35810 = G__35822;
i__35807_35811 = G__35823;
continue;
} else {
var ns_35824 = cljs.core.first.call(null,seq__35804_35818__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35824);

var G__35825 = cljs.core.next.call(null,seq__35804_35818__$1);
var G__35826 = null;
var G__35827 = (0);
var G__35828 = (0);
seq__35804_35808 = G__35825;
chunk__35805_35809 = G__35826;
count__35806_35810 = G__35827;
i__35807_35811 = G__35828;
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
var G__35829__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35830__i = 0, G__35830__a = new Array(arguments.length -  0);
while (G__35830__i < G__35830__a.length) {G__35830__a[G__35830__i] = arguments[G__35830__i + 0]; ++G__35830__i;}
  args = new cljs.core.IndexedSeq(G__35830__a,0);
} 
return G__35829__delegate.call(this,args);};
G__35829.cljs$lang$maxFixedArity = 0;
G__35829.cljs$lang$applyTo = (function (arglist__35831){
var args = cljs.core.seq(arglist__35831);
return G__35829__delegate(args);
});
G__35829.cljs$core$IFn$_invoke$arity$variadic = G__35829__delegate;
return G__35829;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35833 = cljs.core._EQ_;
var expr__35834 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35833.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35834))){
var path_parts = ((function (pred__35833,expr__35834){
return (function (p1__35832_SHARP_){
return clojure.string.split.call(null,p1__35832_SHARP_,/[\/\\]/);
});})(pred__35833,expr__35834))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35833,expr__35834){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35836){if((e35836 instanceof Error)){
var e = e35836;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35836;

}
}})());
});
;})(path_parts,sep,root,pred__35833,expr__35834))
} else {
if(cljs.core.truth_(pred__35833.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35834))){
return ((function (pred__35833,expr__35834){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35833,expr__35834){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35833,expr__35834))
);

return deferred.addErrback(((function (deferred,pred__35833,expr__35834){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35833,expr__35834))
);
});
;})(pred__35833,expr__35834))
} else {
return ((function (pred__35833,expr__35834){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35833,expr__35834))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35837,callback){
var map__35840 = p__35837;
var map__35840__$1 = ((((!((map__35840 == null)))?((((map__35840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35840):map__35840);
var file_msg = map__35840__$1;
var request_url = cljs.core.get.call(null,map__35840__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35840,map__35840__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35840,map__35840__$1,file_msg,request_url))
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
return (function (state_35864){
var state_val_35865 = (state_35864[(1)]);
if((state_val_35865 === (7))){
var inst_35860 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
var statearr_35866_35886 = state_35864__$1;
(statearr_35866_35886[(2)] = inst_35860);

(statearr_35866_35886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (1))){
var state_35864__$1 = state_35864;
var statearr_35867_35887 = state_35864__$1;
(statearr_35867_35887[(2)] = null);

(statearr_35867_35887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (4))){
var inst_35844 = (state_35864[(7)]);
var inst_35844__$1 = (state_35864[(2)]);
var state_35864__$1 = (function (){var statearr_35868 = state_35864;
(statearr_35868[(7)] = inst_35844__$1);

return statearr_35868;
})();
if(cljs.core.truth_(inst_35844__$1)){
var statearr_35869_35888 = state_35864__$1;
(statearr_35869_35888[(1)] = (5));

} else {
var statearr_35870_35889 = state_35864__$1;
(statearr_35870_35889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (6))){
var state_35864__$1 = state_35864;
var statearr_35871_35890 = state_35864__$1;
(statearr_35871_35890[(2)] = null);

(statearr_35871_35890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (3))){
var inst_35862 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35864__$1,inst_35862);
} else {
if((state_val_35865 === (2))){
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35864__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35865 === (11))){
var inst_35856 = (state_35864[(2)]);
var state_35864__$1 = (function (){var statearr_35872 = state_35864;
(statearr_35872[(8)] = inst_35856);

return statearr_35872;
})();
var statearr_35873_35891 = state_35864__$1;
(statearr_35873_35891[(2)] = null);

(statearr_35873_35891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (9))){
var inst_35848 = (state_35864[(9)]);
var inst_35850 = (state_35864[(10)]);
var inst_35852 = inst_35850.call(null,inst_35848);
var state_35864__$1 = state_35864;
var statearr_35874_35892 = state_35864__$1;
(statearr_35874_35892[(2)] = inst_35852);

(statearr_35874_35892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (5))){
var inst_35844 = (state_35864[(7)]);
var inst_35846 = figwheel.client.file_reloading.blocking_load.call(null,inst_35844);
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35864__$1,(8),inst_35846);
} else {
if((state_val_35865 === (10))){
var inst_35848 = (state_35864[(9)]);
var inst_35854 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35848);
var state_35864__$1 = state_35864;
var statearr_35875_35893 = state_35864__$1;
(statearr_35875_35893[(2)] = inst_35854);

(statearr_35875_35893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (8))){
var inst_35844 = (state_35864[(7)]);
var inst_35850 = (state_35864[(10)]);
var inst_35848 = (state_35864[(2)]);
var inst_35849 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35850__$1 = cljs.core.get.call(null,inst_35849,inst_35844);
var state_35864__$1 = (function (){var statearr_35876 = state_35864;
(statearr_35876[(9)] = inst_35848);

(statearr_35876[(10)] = inst_35850__$1);

return statearr_35876;
})();
if(cljs.core.truth_(inst_35850__$1)){
var statearr_35877_35894 = state_35864__$1;
(statearr_35877_35894[(1)] = (9));

} else {
var statearr_35878_35895 = state_35864__$1;
(statearr_35878_35895[(1)] = (10));

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
var statearr_35882 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35882[(0)] = figwheel$client$file_reloading$state_machine__28466__auto__);

(statearr_35882[(1)] = (1));

return statearr_35882;
});
var figwheel$client$file_reloading$state_machine__28466__auto____1 = (function (state_35864){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35883){if((e35883 instanceof Object)){
var ex__28469__auto__ = e35883;
var statearr_35884_35896 = state_35864;
(statearr_35884_35896[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35897 = state_35864;
state_35864 = G__35897;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28466__auto__ = function(state_35864){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28466__auto____1.call(this,state_35864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28466__auto____0;
figwheel$client$file_reloading$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28466__auto____1;
return figwheel$client$file_reloading$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_35885 = f__28578__auto__.call(null);
(statearr_35885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35885;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35898,callback){
var map__35901 = p__35898;
var map__35901__$1 = ((((!((map__35901 == null)))?((((map__35901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35901):map__35901);
var file_msg = map__35901__$1;
var namespace = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35901,map__35901__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35901,map__35901__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35903){
var map__35906 = p__35903;
var map__35906__$1 = ((((!((map__35906 == null)))?((((map__35906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35906):map__35906);
var file_msg = map__35906__$1;
var namespace = cljs.core.get.call(null,map__35906__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35908,callback){
var map__35911 = p__35908;
var map__35911__$1 = ((((!((map__35911 == null)))?((((map__35911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35911):map__35911);
var file_msg = map__35911__$1;
var request_url = cljs.core.get.call(null,map__35911__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35911__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28577__auto___36015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___36015,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___36015,out){
return (function (state_35997){
var state_val_35998 = (state_35997[(1)]);
if((state_val_35998 === (1))){
var inst_35971 = cljs.core.seq.call(null,files);
var inst_35972 = cljs.core.first.call(null,inst_35971);
var inst_35973 = cljs.core.next.call(null,inst_35971);
var inst_35974 = files;
var state_35997__$1 = (function (){var statearr_35999 = state_35997;
(statearr_35999[(7)] = inst_35973);

(statearr_35999[(8)] = inst_35972);

(statearr_35999[(9)] = inst_35974);

return statearr_35999;
})();
var statearr_36000_36016 = state_35997__$1;
(statearr_36000_36016[(2)] = null);

(statearr_36000_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35998 === (2))){
var inst_35980 = (state_35997[(10)]);
var inst_35974 = (state_35997[(9)]);
var inst_35979 = cljs.core.seq.call(null,inst_35974);
var inst_35980__$1 = cljs.core.first.call(null,inst_35979);
var inst_35981 = cljs.core.next.call(null,inst_35979);
var inst_35982 = (inst_35980__$1 == null);
var inst_35983 = cljs.core.not.call(null,inst_35982);
var state_35997__$1 = (function (){var statearr_36001 = state_35997;
(statearr_36001[(10)] = inst_35980__$1);

(statearr_36001[(11)] = inst_35981);

return statearr_36001;
})();
if(inst_35983){
var statearr_36002_36017 = state_35997__$1;
(statearr_36002_36017[(1)] = (4));

} else {
var statearr_36003_36018 = state_35997__$1;
(statearr_36003_36018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35998 === (3))){
var inst_35995 = (state_35997[(2)]);
var state_35997__$1 = state_35997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35997__$1,inst_35995);
} else {
if((state_val_35998 === (4))){
var inst_35980 = (state_35997[(10)]);
var inst_35985 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35980);
var state_35997__$1 = state_35997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35997__$1,(7),inst_35985);
} else {
if((state_val_35998 === (5))){
var inst_35991 = cljs.core.async.close_BANG_.call(null,out);
var state_35997__$1 = state_35997;
var statearr_36004_36019 = state_35997__$1;
(statearr_36004_36019[(2)] = inst_35991);

(statearr_36004_36019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35998 === (6))){
var inst_35993 = (state_35997[(2)]);
var state_35997__$1 = state_35997;
var statearr_36005_36020 = state_35997__$1;
(statearr_36005_36020[(2)] = inst_35993);

(statearr_36005_36020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35998 === (7))){
var inst_35981 = (state_35997[(11)]);
var inst_35987 = (state_35997[(2)]);
var inst_35988 = cljs.core.async.put_BANG_.call(null,out,inst_35987);
var inst_35974 = inst_35981;
var state_35997__$1 = (function (){var statearr_36006 = state_35997;
(statearr_36006[(9)] = inst_35974);

(statearr_36006[(12)] = inst_35988);

return statearr_36006;
})();
var statearr_36007_36021 = state_35997__$1;
(statearr_36007_36021[(2)] = null);

(statearr_36007_36021[(1)] = (2));


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
});})(c__28577__auto___36015,out))
;
return ((function (switch__28465__auto__,c__28577__auto___36015,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0 = (function (){
var statearr_36011 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36011[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__);

(statearr_36011[(1)] = (1));

return statearr_36011;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1 = (function (state_35997){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e36012){if((e36012 instanceof Object)){
var ex__28469__auto__ = e36012;
var statearr_36013_36022 = state_35997;
(statearr_36013_36022[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36023 = state_35997;
state_35997 = G__36023;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__ = function(state_35997){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1.call(this,state_35997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___36015,out))
})();
var state__28579__auto__ = (function (){var statearr_36014 = f__28578__auto__.call(null);
(statearr_36014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___36015);

return statearr_36014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___36015,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36024,opts){
var map__36028 = p__36024;
var map__36028__$1 = ((((!((map__36028 == null)))?((((map__36028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36028):map__36028);
var eval_body__$1 = cljs.core.get.call(null,map__36028__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36030){var e = e36030;
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
return (function (p1__36031_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36031_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36040){
var vec__36041 = p__36040;
var k = cljs.core.nth.call(null,vec__36041,(0),null);
var v = cljs.core.nth.call(null,vec__36041,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36044){
var vec__36045 = p__36044;
var k = cljs.core.nth.call(null,vec__36045,(0),null);
var v = cljs.core.nth.call(null,vec__36045,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36051,p__36052){
var map__36299 = p__36051;
var map__36299__$1 = ((((!((map__36299 == null)))?((((map__36299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36299):map__36299);
var opts = map__36299__$1;
var before_jsload = cljs.core.get.call(null,map__36299__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36299__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36299__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36300 = p__36052;
var map__36300__$1 = ((((!((map__36300 == null)))?((((map__36300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36300):map__36300);
var msg = map__36300__$1;
var files = cljs.core.get.call(null,map__36300__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36300__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36300__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36453){
var state_val_36454 = (state_36453[(1)]);
if((state_val_36454 === (7))){
var inst_36315 = (state_36453[(7)]);
var inst_36316 = (state_36453[(8)]);
var inst_36317 = (state_36453[(9)]);
var inst_36314 = (state_36453[(10)]);
var inst_36322 = cljs.core._nth.call(null,inst_36315,inst_36317);
var inst_36323 = figwheel.client.file_reloading.eval_body.call(null,inst_36322,opts);
var inst_36324 = (inst_36317 + (1));
var tmp36455 = inst_36315;
var tmp36456 = inst_36316;
var tmp36457 = inst_36314;
var inst_36314__$1 = tmp36457;
var inst_36315__$1 = tmp36455;
var inst_36316__$1 = tmp36456;
var inst_36317__$1 = inst_36324;
var state_36453__$1 = (function (){var statearr_36458 = state_36453;
(statearr_36458[(7)] = inst_36315__$1);

(statearr_36458[(8)] = inst_36316__$1);

(statearr_36458[(11)] = inst_36323);

(statearr_36458[(9)] = inst_36317__$1);

(statearr_36458[(10)] = inst_36314__$1);

return statearr_36458;
})();
var statearr_36459_36545 = state_36453__$1;
(statearr_36459_36545[(2)] = null);

(statearr_36459_36545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (20))){
var inst_36357 = (state_36453[(12)]);
var inst_36365 = figwheel.client.file_reloading.sort_files.call(null,inst_36357);
var state_36453__$1 = state_36453;
var statearr_36460_36546 = state_36453__$1;
(statearr_36460_36546[(2)] = inst_36365);

(statearr_36460_36546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (27))){
var state_36453__$1 = state_36453;
var statearr_36461_36547 = state_36453__$1;
(statearr_36461_36547[(2)] = null);

(statearr_36461_36547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (1))){
var inst_36306 = (state_36453[(13)]);
var inst_36303 = before_jsload.call(null,files);
var inst_36304 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36305 = (function (){return ((function (inst_36306,inst_36303,inst_36304,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36048_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36048_SHARP_);
});
;})(inst_36306,inst_36303,inst_36304,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36306__$1 = cljs.core.filter.call(null,inst_36305,files);
var inst_36307 = cljs.core.not_empty.call(null,inst_36306__$1);
var state_36453__$1 = (function (){var statearr_36462 = state_36453;
(statearr_36462[(13)] = inst_36306__$1);

(statearr_36462[(14)] = inst_36304);

(statearr_36462[(15)] = inst_36303);

return statearr_36462;
})();
if(cljs.core.truth_(inst_36307)){
var statearr_36463_36548 = state_36453__$1;
(statearr_36463_36548[(1)] = (2));

} else {
var statearr_36464_36549 = state_36453__$1;
(statearr_36464_36549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (24))){
var state_36453__$1 = state_36453;
var statearr_36465_36550 = state_36453__$1;
(statearr_36465_36550[(2)] = null);

(statearr_36465_36550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (39))){
var inst_36407 = (state_36453[(16)]);
var state_36453__$1 = state_36453;
var statearr_36466_36551 = state_36453__$1;
(statearr_36466_36551[(2)] = inst_36407);

(statearr_36466_36551[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (46))){
var inst_36448 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36467_36552 = state_36453__$1;
(statearr_36467_36552[(2)] = inst_36448);

(statearr_36467_36552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (4))){
var inst_36351 = (state_36453[(2)]);
var inst_36352 = cljs.core.List.EMPTY;
var inst_36353 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36352);
var inst_36354 = (function (){return ((function (inst_36351,inst_36352,inst_36353,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36049_SHARP_){
var and__24748__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36049_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36049_SHARP_));
} else {
return and__24748__auto__;
}
});
;})(inst_36351,inst_36352,inst_36353,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36355 = cljs.core.filter.call(null,inst_36354,files);
var inst_36356 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36357 = cljs.core.concat.call(null,inst_36355,inst_36356);
var state_36453__$1 = (function (){var statearr_36468 = state_36453;
(statearr_36468[(12)] = inst_36357);

(statearr_36468[(17)] = inst_36353);

(statearr_36468[(18)] = inst_36351);

return statearr_36468;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36469_36553 = state_36453__$1;
(statearr_36469_36553[(1)] = (16));

} else {
var statearr_36470_36554 = state_36453__$1;
(statearr_36470_36554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (15))){
var inst_36341 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36471_36555 = state_36453__$1;
(statearr_36471_36555[(2)] = inst_36341);

(statearr_36471_36555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (21))){
var inst_36367 = (state_36453[(19)]);
var inst_36367__$1 = (state_36453[(2)]);
var inst_36368 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36367__$1);
var state_36453__$1 = (function (){var statearr_36472 = state_36453;
(statearr_36472[(19)] = inst_36367__$1);

return statearr_36472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36453__$1,(22),inst_36368);
} else {
if((state_val_36454 === (31))){
var inst_36451 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36453__$1,inst_36451);
} else {
if((state_val_36454 === (32))){
var inst_36407 = (state_36453[(16)]);
var inst_36412 = inst_36407.cljs$lang$protocol_mask$partition0$;
var inst_36413 = (inst_36412 & (64));
var inst_36414 = inst_36407.cljs$core$ISeq$;
var inst_36415 = (inst_36413) || (inst_36414);
var state_36453__$1 = state_36453;
if(cljs.core.truth_(inst_36415)){
var statearr_36473_36556 = state_36453__$1;
(statearr_36473_36556[(1)] = (35));

} else {
var statearr_36474_36557 = state_36453__$1;
(statearr_36474_36557[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (40))){
var inst_36428 = (state_36453[(20)]);
var inst_36427 = (state_36453[(2)]);
var inst_36428__$1 = cljs.core.get.call(null,inst_36427,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36429 = cljs.core.get.call(null,inst_36427,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36430 = cljs.core.not_empty.call(null,inst_36428__$1);
var state_36453__$1 = (function (){var statearr_36475 = state_36453;
(statearr_36475[(20)] = inst_36428__$1);

(statearr_36475[(21)] = inst_36429);

return statearr_36475;
})();
if(cljs.core.truth_(inst_36430)){
var statearr_36476_36558 = state_36453__$1;
(statearr_36476_36558[(1)] = (41));

} else {
var statearr_36477_36559 = state_36453__$1;
(statearr_36477_36559[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (33))){
var state_36453__$1 = state_36453;
var statearr_36478_36560 = state_36453__$1;
(statearr_36478_36560[(2)] = false);

(statearr_36478_36560[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (13))){
var inst_36327 = (state_36453[(22)]);
var inst_36331 = cljs.core.chunk_first.call(null,inst_36327);
var inst_36332 = cljs.core.chunk_rest.call(null,inst_36327);
var inst_36333 = cljs.core.count.call(null,inst_36331);
var inst_36314 = inst_36332;
var inst_36315 = inst_36331;
var inst_36316 = inst_36333;
var inst_36317 = (0);
var state_36453__$1 = (function (){var statearr_36479 = state_36453;
(statearr_36479[(7)] = inst_36315);

(statearr_36479[(8)] = inst_36316);

(statearr_36479[(9)] = inst_36317);

(statearr_36479[(10)] = inst_36314);

return statearr_36479;
})();
var statearr_36480_36561 = state_36453__$1;
(statearr_36480_36561[(2)] = null);

(statearr_36480_36561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (22))){
var inst_36375 = (state_36453[(23)]);
var inst_36371 = (state_36453[(24)]);
var inst_36370 = (state_36453[(25)]);
var inst_36367 = (state_36453[(19)]);
var inst_36370__$1 = (state_36453[(2)]);
var inst_36371__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36370__$1);
var inst_36372 = (function (){var all_files = inst_36367;
var res_SINGLEQUOTE_ = inst_36370__$1;
var res = inst_36371__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36375,inst_36371,inst_36370,inst_36367,inst_36370__$1,inst_36371__$1,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36050_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36050_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36375,inst_36371,inst_36370,inst_36367,inst_36370__$1,inst_36371__$1,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36373 = cljs.core.filter.call(null,inst_36372,inst_36370__$1);
var inst_36374 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36375__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36374);
var inst_36376 = cljs.core.not_empty.call(null,inst_36375__$1);
var state_36453__$1 = (function (){var statearr_36481 = state_36453;
(statearr_36481[(23)] = inst_36375__$1);

(statearr_36481[(24)] = inst_36371__$1);

(statearr_36481[(26)] = inst_36373);

(statearr_36481[(25)] = inst_36370__$1);

return statearr_36481;
})();
if(cljs.core.truth_(inst_36376)){
var statearr_36482_36562 = state_36453__$1;
(statearr_36482_36562[(1)] = (23));

} else {
var statearr_36483_36563 = state_36453__$1;
(statearr_36483_36563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (36))){
var state_36453__$1 = state_36453;
var statearr_36484_36564 = state_36453__$1;
(statearr_36484_36564[(2)] = false);

(statearr_36484_36564[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (41))){
var inst_36428 = (state_36453[(20)]);
var inst_36432 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36433 = cljs.core.map.call(null,inst_36432,inst_36428);
var inst_36434 = cljs.core.pr_str.call(null,inst_36433);
var inst_36435 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36434)].join('');
var inst_36436 = figwheel.client.utils.log.call(null,inst_36435);
var state_36453__$1 = state_36453;
var statearr_36485_36565 = state_36453__$1;
(statearr_36485_36565[(2)] = inst_36436);

(statearr_36485_36565[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (43))){
var inst_36429 = (state_36453[(21)]);
var inst_36439 = (state_36453[(2)]);
var inst_36440 = cljs.core.not_empty.call(null,inst_36429);
var state_36453__$1 = (function (){var statearr_36486 = state_36453;
(statearr_36486[(27)] = inst_36439);

return statearr_36486;
})();
if(cljs.core.truth_(inst_36440)){
var statearr_36487_36566 = state_36453__$1;
(statearr_36487_36566[(1)] = (44));

} else {
var statearr_36488_36567 = state_36453__$1;
(statearr_36488_36567[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (29))){
var inst_36375 = (state_36453[(23)]);
var inst_36371 = (state_36453[(24)]);
var inst_36373 = (state_36453[(26)]);
var inst_36407 = (state_36453[(16)]);
var inst_36370 = (state_36453[(25)]);
var inst_36367 = (state_36453[(19)]);
var inst_36403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36406 = (function (){var all_files = inst_36367;
var res_SINGLEQUOTE_ = inst_36370;
var res = inst_36371;
var files_not_loaded = inst_36373;
var dependencies_that_loaded = inst_36375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36407,inst_36370,inst_36367,inst_36403,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36405){
var map__36489 = p__36405;
var map__36489__$1 = ((((!((map__36489 == null)))?((((map__36489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36489):map__36489);
var namespace = cljs.core.get.call(null,map__36489__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36407,inst_36370,inst_36367,inst_36403,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36407__$1 = cljs.core.group_by.call(null,inst_36406,inst_36373);
var inst_36409 = (inst_36407__$1 == null);
var inst_36410 = cljs.core.not.call(null,inst_36409);
var state_36453__$1 = (function (){var statearr_36491 = state_36453;
(statearr_36491[(28)] = inst_36403);

(statearr_36491[(16)] = inst_36407__$1);

return statearr_36491;
})();
if(inst_36410){
var statearr_36492_36568 = state_36453__$1;
(statearr_36492_36568[(1)] = (32));

} else {
var statearr_36493_36569 = state_36453__$1;
(statearr_36493_36569[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (44))){
var inst_36429 = (state_36453[(21)]);
var inst_36442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36429);
var inst_36443 = cljs.core.pr_str.call(null,inst_36442);
var inst_36444 = [cljs.core.str("not required: "),cljs.core.str(inst_36443)].join('');
var inst_36445 = figwheel.client.utils.log.call(null,inst_36444);
var state_36453__$1 = state_36453;
var statearr_36494_36570 = state_36453__$1;
(statearr_36494_36570[(2)] = inst_36445);

(statearr_36494_36570[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (6))){
var inst_36348 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36495_36571 = state_36453__$1;
(statearr_36495_36571[(2)] = inst_36348);

(statearr_36495_36571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (28))){
var inst_36373 = (state_36453[(26)]);
var inst_36400 = (state_36453[(2)]);
var inst_36401 = cljs.core.not_empty.call(null,inst_36373);
var state_36453__$1 = (function (){var statearr_36496 = state_36453;
(statearr_36496[(29)] = inst_36400);

return statearr_36496;
})();
if(cljs.core.truth_(inst_36401)){
var statearr_36497_36572 = state_36453__$1;
(statearr_36497_36572[(1)] = (29));

} else {
var statearr_36498_36573 = state_36453__$1;
(statearr_36498_36573[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (25))){
var inst_36371 = (state_36453[(24)]);
var inst_36387 = (state_36453[(2)]);
var inst_36388 = cljs.core.not_empty.call(null,inst_36371);
var state_36453__$1 = (function (){var statearr_36499 = state_36453;
(statearr_36499[(30)] = inst_36387);

return statearr_36499;
})();
if(cljs.core.truth_(inst_36388)){
var statearr_36500_36574 = state_36453__$1;
(statearr_36500_36574[(1)] = (26));

} else {
var statearr_36501_36575 = state_36453__$1;
(statearr_36501_36575[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (34))){
var inst_36422 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
if(cljs.core.truth_(inst_36422)){
var statearr_36502_36576 = state_36453__$1;
(statearr_36502_36576[(1)] = (38));

} else {
var statearr_36503_36577 = state_36453__$1;
(statearr_36503_36577[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (17))){
var state_36453__$1 = state_36453;
var statearr_36504_36578 = state_36453__$1;
(statearr_36504_36578[(2)] = recompile_dependents);

(statearr_36504_36578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (3))){
var state_36453__$1 = state_36453;
var statearr_36505_36579 = state_36453__$1;
(statearr_36505_36579[(2)] = null);

(statearr_36505_36579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (12))){
var inst_36344 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36506_36580 = state_36453__$1;
(statearr_36506_36580[(2)] = inst_36344);

(statearr_36506_36580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (2))){
var inst_36306 = (state_36453[(13)]);
var inst_36313 = cljs.core.seq.call(null,inst_36306);
var inst_36314 = inst_36313;
var inst_36315 = null;
var inst_36316 = (0);
var inst_36317 = (0);
var state_36453__$1 = (function (){var statearr_36507 = state_36453;
(statearr_36507[(7)] = inst_36315);

(statearr_36507[(8)] = inst_36316);

(statearr_36507[(9)] = inst_36317);

(statearr_36507[(10)] = inst_36314);

return statearr_36507;
})();
var statearr_36508_36581 = state_36453__$1;
(statearr_36508_36581[(2)] = null);

(statearr_36508_36581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (23))){
var inst_36375 = (state_36453[(23)]);
var inst_36371 = (state_36453[(24)]);
var inst_36373 = (state_36453[(26)]);
var inst_36370 = (state_36453[(25)]);
var inst_36367 = (state_36453[(19)]);
var inst_36378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36380 = (function (){var all_files = inst_36367;
var res_SINGLEQUOTE_ = inst_36370;
var res = inst_36371;
var files_not_loaded = inst_36373;
var dependencies_that_loaded = inst_36375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36370,inst_36367,inst_36378,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36379){
var map__36509 = p__36379;
var map__36509__$1 = ((((!((map__36509 == null)))?((((map__36509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36509):map__36509);
var request_url = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36370,inst_36367,inst_36378,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36381 = cljs.core.reverse.call(null,inst_36375);
var inst_36382 = cljs.core.map.call(null,inst_36380,inst_36381);
var inst_36383 = cljs.core.pr_str.call(null,inst_36382);
var inst_36384 = figwheel.client.utils.log.call(null,inst_36383);
var state_36453__$1 = (function (){var statearr_36511 = state_36453;
(statearr_36511[(31)] = inst_36378);

return statearr_36511;
})();
var statearr_36512_36582 = state_36453__$1;
(statearr_36512_36582[(2)] = inst_36384);

(statearr_36512_36582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (35))){
var state_36453__$1 = state_36453;
var statearr_36513_36583 = state_36453__$1;
(statearr_36513_36583[(2)] = true);

(statearr_36513_36583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (19))){
var inst_36357 = (state_36453[(12)]);
var inst_36363 = figwheel.client.file_reloading.expand_files.call(null,inst_36357);
var state_36453__$1 = state_36453;
var statearr_36514_36584 = state_36453__$1;
(statearr_36514_36584[(2)] = inst_36363);

(statearr_36514_36584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (11))){
var state_36453__$1 = state_36453;
var statearr_36515_36585 = state_36453__$1;
(statearr_36515_36585[(2)] = null);

(statearr_36515_36585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (9))){
var inst_36346 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36516_36586 = state_36453__$1;
(statearr_36516_36586[(2)] = inst_36346);

(statearr_36516_36586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (5))){
var inst_36316 = (state_36453[(8)]);
var inst_36317 = (state_36453[(9)]);
var inst_36319 = (inst_36317 < inst_36316);
var inst_36320 = inst_36319;
var state_36453__$1 = state_36453;
if(cljs.core.truth_(inst_36320)){
var statearr_36517_36587 = state_36453__$1;
(statearr_36517_36587[(1)] = (7));

} else {
var statearr_36518_36588 = state_36453__$1;
(statearr_36518_36588[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (14))){
var inst_36327 = (state_36453[(22)]);
var inst_36336 = cljs.core.first.call(null,inst_36327);
var inst_36337 = figwheel.client.file_reloading.eval_body.call(null,inst_36336,opts);
var inst_36338 = cljs.core.next.call(null,inst_36327);
var inst_36314 = inst_36338;
var inst_36315 = null;
var inst_36316 = (0);
var inst_36317 = (0);
var state_36453__$1 = (function (){var statearr_36519 = state_36453;
(statearr_36519[(32)] = inst_36337);

(statearr_36519[(7)] = inst_36315);

(statearr_36519[(8)] = inst_36316);

(statearr_36519[(9)] = inst_36317);

(statearr_36519[(10)] = inst_36314);

return statearr_36519;
})();
var statearr_36520_36589 = state_36453__$1;
(statearr_36520_36589[(2)] = null);

(statearr_36520_36589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (45))){
var state_36453__$1 = state_36453;
var statearr_36521_36590 = state_36453__$1;
(statearr_36521_36590[(2)] = null);

(statearr_36521_36590[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (26))){
var inst_36375 = (state_36453[(23)]);
var inst_36371 = (state_36453[(24)]);
var inst_36373 = (state_36453[(26)]);
var inst_36370 = (state_36453[(25)]);
var inst_36367 = (state_36453[(19)]);
var inst_36390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36392 = (function (){var all_files = inst_36367;
var res_SINGLEQUOTE_ = inst_36370;
var res = inst_36371;
var files_not_loaded = inst_36373;
var dependencies_that_loaded = inst_36375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36370,inst_36367,inst_36390,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36391){
var map__36522 = p__36391;
var map__36522__$1 = ((((!((map__36522 == null)))?((((map__36522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36522):map__36522);
var namespace = cljs.core.get.call(null,map__36522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36370,inst_36367,inst_36390,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36393 = cljs.core.map.call(null,inst_36392,inst_36371);
var inst_36394 = cljs.core.pr_str.call(null,inst_36393);
var inst_36395 = figwheel.client.utils.log.call(null,inst_36394);
var inst_36396 = (function (){var all_files = inst_36367;
var res_SINGLEQUOTE_ = inst_36370;
var res = inst_36371;
var files_not_loaded = inst_36373;
var dependencies_that_loaded = inst_36375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36370,inst_36367,inst_36390,inst_36392,inst_36393,inst_36394,inst_36395,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36375,inst_36371,inst_36373,inst_36370,inst_36367,inst_36390,inst_36392,inst_36393,inst_36394,inst_36395,state_val_36454,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36397 = setTimeout(inst_36396,(10));
var state_36453__$1 = (function (){var statearr_36524 = state_36453;
(statearr_36524[(33)] = inst_36390);

(statearr_36524[(34)] = inst_36395);

return statearr_36524;
})();
var statearr_36525_36591 = state_36453__$1;
(statearr_36525_36591[(2)] = inst_36397);

(statearr_36525_36591[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (16))){
var state_36453__$1 = state_36453;
var statearr_36526_36592 = state_36453__$1;
(statearr_36526_36592[(2)] = reload_dependents);

(statearr_36526_36592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (38))){
var inst_36407 = (state_36453[(16)]);
var inst_36424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36407);
var state_36453__$1 = state_36453;
var statearr_36527_36593 = state_36453__$1;
(statearr_36527_36593[(2)] = inst_36424);

(statearr_36527_36593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (30))){
var state_36453__$1 = state_36453;
var statearr_36528_36594 = state_36453__$1;
(statearr_36528_36594[(2)] = null);

(statearr_36528_36594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (10))){
var inst_36327 = (state_36453[(22)]);
var inst_36329 = cljs.core.chunked_seq_QMARK_.call(null,inst_36327);
var state_36453__$1 = state_36453;
if(inst_36329){
var statearr_36529_36595 = state_36453__$1;
(statearr_36529_36595[(1)] = (13));

} else {
var statearr_36530_36596 = state_36453__$1;
(statearr_36530_36596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (18))){
var inst_36361 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
if(cljs.core.truth_(inst_36361)){
var statearr_36531_36597 = state_36453__$1;
(statearr_36531_36597[(1)] = (19));

} else {
var statearr_36532_36598 = state_36453__$1;
(statearr_36532_36598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (42))){
var state_36453__$1 = state_36453;
var statearr_36533_36599 = state_36453__$1;
(statearr_36533_36599[(2)] = null);

(statearr_36533_36599[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (37))){
var inst_36419 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36534_36600 = state_36453__$1;
(statearr_36534_36600[(2)] = inst_36419);

(statearr_36534_36600[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (8))){
var inst_36327 = (state_36453[(22)]);
var inst_36314 = (state_36453[(10)]);
var inst_36327__$1 = cljs.core.seq.call(null,inst_36314);
var state_36453__$1 = (function (){var statearr_36535 = state_36453;
(statearr_36535[(22)] = inst_36327__$1);

return statearr_36535;
})();
if(inst_36327__$1){
var statearr_36536_36601 = state_36453__$1;
(statearr_36536_36601[(1)] = (10));

} else {
var statearr_36537_36602 = state_36453__$1;
(statearr_36537_36602[(1)] = (11));

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
});})(c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28465__auto__,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0 = (function (){
var statearr_36541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36541[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__);

(statearr_36541[(1)] = (1));

return statearr_36541;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1 = (function (state_36453){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_36453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e36542){if((e36542 instanceof Object)){
var ex__28469__auto__ = e36542;
var statearr_36543_36603 = state_36453;
(statearr_36543_36603[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36604 = state_36453;
state_36453 = G__36604;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__ = function(state_36453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1.call(this,state_36453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28579__auto__ = (function (){var statearr_36544 = f__28578__auto__.call(null);
(statearr_36544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_36544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,map__36299,map__36299__$1,opts,before_jsload,on_jsload,reload_dependents,map__36300,map__36300__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36607,link){
var map__36610 = p__36607;
var map__36610__$1 = ((((!((map__36610 == null)))?((((map__36610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36610):map__36610);
var file = cljs.core.get.call(null,map__36610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36610,map__36610__$1,file){
return (function (p1__36605_SHARP_,p2__36606_SHARP_){
if(cljs.core._EQ_.call(null,p1__36605_SHARP_,p2__36606_SHARP_)){
return p1__36605_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36610,map__36610__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36616){
var map__36617 = p__36616;
var map__36617__$1 = ((((!((map__36617 == null)))?((((map__36617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36617):map__36617);
var match_length = cljs.core.get.call(null,map__36617__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36617__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36612_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36612_SHARP_);
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
var args36619 = [];
var len__25835__auto___36622 = arguments.length;
var i__25836__auto___36623 = (0);
while(true){
if((i__25836__auto___36623 < len__25835__auto___36622)){
args36619.push((arguments[i__25836__auto___36623]));

var G__36624 = (i__25836__auto___36623 + (1));
i__25836__auto___36623 = G__36624;
continue;
} else {
}
break;
}

var G__36621 = args36619.length;
switch (G__36621) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36619.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36626_SHARP_,p2__36627_SHARP_){
return cljs.core.assoc.call(null,p1__36626_SHARP_,cljs.core.get.call(null,p2__36627_SHARP_,key),p2__36627_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36628){
var map__36631 = p__36628;
var map__36631__$1 = ((((!((map__36631 == null)))?((((map__36631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36631):map__36631);
var f_data = map__36631__$1;
var file = cljs.core.get.call(null,map__36631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36633,p__36634){
var map__36643 = p__36633;
var map__36643__$1 = ((((!((map__36643 == null)))?((((map__36643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36643):map__36643);
var opts = map__36643__$1;
var on_cssload = cljs.core.get.call(null,map__36643__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36644 = p__36634;
var map__36644__$1 = ((((!((map__36644 == null)))?((((map__36644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36644):map__36644);
var files_msg = map__36644__$1;
var files = cljs.core.get.call(null,map__36644__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36647_36651 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__36648_36652 = null;
var count__36649_36653 = (0);
var i__36650_36654 = (0);
while(true){
if((i__36650_36654 < count__36649_36653)){
var f_36655 = cljs.core._nth.call(null,chunk__36648_36652,i__36650_36654);
figwheel.client.file_reloading.reload_css_file.call(null,f_36655);

var G__36656 = seq__36647_36651;
var G__36657 = chunk__36648_36652;
var G__36658 = count__36649_36653;
var G__36659 = (i__36650_36654 + (1));
seq__36647_36651 = G__36656;
chunk__36648_36652 = G__36657;
count__36649_36653 = G__36658;
i__36650_36654 = G__36659;
continue;
} else {
var temp__4657__auto___36660 = cljs.core.seq.call(null,seq__36647_36651);
if(temp__4657__auto___36660){
var seq__36647_36661__$1 = temp__4657__auto___36660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36647_36661__$1)){
var c__25571__auto___36662 = cljs.core.chunk_first.call(null,seq__36647_36661__$1);
var G__36663 = cljs.core.chunk_rest.call(null,seq__36647_36661__$1);
var G__36664 = c__25571__auto___36662;
var G__36665 = cljs.core.count.call(null,c__25571__auto___36662);
var G__36666 = (0);
seq__36647_36651 = G__36663;
chunk__36648_36652 = G__36664;
count__36649_36653 = G__36665;
i__36650_36654 = G__36666;
continue;
} else {
var f_36667 = cljs.core.first.call(null,seq__36647_36661__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36667);

var G__36668 = cljs.core.next.call(null,seq__36647_36661__$1);
var G__36669 = null;
var G__36670 = (0);
var G__36671 = (0);
seq__36647_36651 = G__36668;
chunk__36648_36652 = G__36669;
count__36649_36653 = G__36670;
i__36650_36654 = G__36671;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36643,map__36643__$1,opts,on_cssload,map__36644,map__36644__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__36643,map__36643__$1,opts,on_cssload,map__36644,map__36644__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1488930785532