// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17950_17964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17951_17965 = null;
var count__17952_17966 = (0);
var i__17953_17967 = (0);
while(true){
if((i__17953_17967 < count__17952_17966)){
var f_17968 = cljs.core._nth.call(null,chunk__17951_17965,i__17953_17967);
cljs.core.println.call(null,"  ",f_17968);

var G__17969 = seq__17950_17964;
var G__17970 = chunk__17951_17965;
var G__17971 = count__17952_17966;
var G__17972 = (i__17953_17967 + (1));
seq__17950_17964 = G__17969;
chunk__17951_17965 = G__17970;
count__17952_17966 = G__17971;
i__17953_17967 = G__17972;
continue;
} else {
var temp__4425__auto___17973 = cljs.core.seq.call(null,seq__17950_17964);
if(temp__4425__auto___17973){
var seq__17950_17974__$1 = temp__4425__auto___17973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17950_17974__$1)){
var c__17629__auto___17975 = cljs.core.chunk_first.call(null,seq__17950_17974__$1);
var G__17976 = cljs.core.chunk_rest.call(null,seq__17950_17974__$1);
var G__17977 = c__17629__auto___17975;
var G__17978 = cljs.core.count.call(null,c__17629__auto___17975);
var G__17979 = (0);
seq__17950_17964 = G__17976;
chunk__17951_17965 = G__17977;
count__17952_17966 = G__17978;
i__17953_17967 = G__17979;
continue;
} else {
var f_17980 = cljs.core.first.call(null,seq__17950_17974__$1);
cljs.core.println.call(null,"  ",f_17980);

var G__17981 = cljs.core.next.call(null,seq__17950_17974__$1);
var G__17982 = null;
var G__17983 = (0);
var G__17984 = (0);
seq__17950_17964 = G__17981;
chunk__17951_17965 = G__17982;
count__17952_17966 = G__17983;
i__17953_17967 = G__17984;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17985 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17985);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17985)))?cljs.core.second.call(null,arglists_17985):arglists_17985));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17954 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17955 = null;
var count__17956 = (0);
var i__17957 = (0);
while(true){
if((i__17957 < count__17956)){
var vec__17958 = cljs.core._nth.call(null,chunk__17955,i__17957);
var name = cljs.core.nth.call(null,vec__17958,(0),null);
var map__17959 = cljs.core.nth.call(null,vec__17958,(1),null);
var map__17959__$1 = ((((!((map__17959 == null)))?((((map__17959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17959):map__17959);
var doc = cljs.core.get.call(null,map__17959__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17959__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17986 = seq__17954;
var G__17987 = chunk__17955;
var G__17988 = count__17956;
var G__17989 = (i__17957 + (1));
seq__17954 = G__17986;
chunk__17955 = G__17987;
count__17956 = G__17988;
i__17957 = G__17989;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17954);
if(temp__4425__auto__){
var seq__17954__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17954__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__17954__$1);
var G__17990 = cljs.core.chunk_rest.call(null,seq__17954__$1);
var G__17991 = c__17629__auto__;
var G__17992 = cljs.core.count.call(null,c__17629__auto__);
var G__17993 = (0);
seq__17954 = G__17990;
chunk__17955 = G__17991;
count__17956 = G__17992;
i__17957 = G__17993;
continue;
} else {
var vec__17961 = cljs.core.first.call(null,seq__17954__$1);
var name = cljs.core.nth.call(null,vec__17961,(0),null);
var map__17962 = cljs.core.nth.call(null,vec__17961,(1),null);
var map__17962__$1 = ((((!((map__17962 == null)))?((((map__17962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17962):map__17962);
var doc = cljs.core.get.call(null,map__17962__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17962__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17994 = cljs.core.next.call(null,seq__17954__$1);
var G__17995 = null;
var G__17996 = (0);
var G__17997 = (0);
seq__17954 = G__17994;
chunk__17955 = G__17995;
count__17956 = G__17996;
i__17957 = G__17997;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1452098810682