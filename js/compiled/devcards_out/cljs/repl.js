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
var seq__17976_17990 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17977_17991 = null;
var count__17978_17992 = (0);
var i__17979_17993 = (0);
while(true){
if((i__17979_17993 < count__17978_17992)){
var f_17994 = cljs.core._nth.call(null,chunk__17977_17991,i__17979_17993);
cljs.core.println.call(null,"  ",f_17994);

var G__17995 = seq__17976_17990;
var G__17996 = chunk__17977_17991;
var G__17997 = count__17978_17992;
var G__17998 = (i__17979_17993 + (1));
seq__17976_17990 = G__17995;
chunk__17977_17991 = G__17996;
count__17978_17992 = G__17997;
i__17979_17993 = G__17998;
continue;
} else {
var temp__4425__auto___17999 = cljs.core.seq.call(null,seq__17976_17990);
if(temp__4425__auto___17999){
var seq__17976_18000__$1 = temp__4425__auto___17999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17976_18000__$1)){
var c__17655__auto___18001 = cljs.core.chunk_first.call(null,seq__17976_18000__$1);
var G__18002 = cljs.core.chunk_rest.call(null,seq__17976_18000__$1);
var G__18003 = c__17655__auto___18001;
var G__18004 = cljs.core.count.call(null,c__17655__auto___18001);
var G__18005 = (0);
seq__17976_17990 = G__18002;
chunk__17977_17991 = G__18003;
count__17978_17992 = G__18004;
i__17979_17993 = G__18005;
continue;
} else {
var f_18006 = cljs.core.first.call(null,seq__17976_18000__$1);
cljs.core.println.call(null,"  ",f_18006);

var G__18007 = cljs.core.next.call(null,seq__17976_18000__$1);
var G__18008 = null;
var G__18009 = (0);
var G__18010 = (0);
seq__17976_17990 = G__18007;
chunk__17977_17991 = G__18008;
count__17978_17992 = G__18009;
i__17979_17993 = G__18010;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18011 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18011);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18011)))?cljs.core.second.call(null,arglists_18011):arglists_18011));
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
var seq__17980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17981 = null;
var count__17982 = (0);
var i__17983 = (0);
while(true){
if((i__17983 < count__17982)){
var vec__17984 = cljs.core._nth.call(null,chunk__17981,i__17983);
var name = cljs.core.nth.call(null,vec__17984,(0),null);
var map__17985 = cljs.core.nth.call(null,vec__17984,(1),null);
var map__17985__$1 = ((((!((map__17985 == null)))?((((map__17985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17985):map__17985);
var doc = cljs.core.get.call(null,map__17985__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17985__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18012 = seq__17980;
var G__18013 = chunk__17981;
var G__18014 = count__17982;
var G__18015 = (i__17983 + (1));
seq__17980 = G__18012;
chunk__17981 = G__18013;
count__17982 = G__18014;
i__17983 = G__18015;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17980);
if(temp__4425__auto__){
var seq__17980__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17980__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__17980__$1);
var G__18016 = cljs.core.chunk_rest.call(null,seq__17980__$1);
var G__18017 = c__17655__auto__;
var G__18018 = cljs.core.count.call(null,c__17655__auto__);
var G__18019 = (0);
seq__17980 = G__18016;
chunk__17981 = G__18017;
count__17982 = G__18018;
i__17983 = G__18019;
continue;
} else {
var vec__17987 = cljs.core.first.call(null,seq__17980__$1);
var name = cljs.core.nth.call(null,vec__17987,(0),null);
var map__17988 = cljs.core.nth.call(null,vec__17987,(1),null);
var map__17988__$1 = ((((!((map__17988 == null)))?((((map__17988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17988):map__17988);
var doc = cljs.core.get.call(null,map__17988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18020 = cljs.core.next.call(null,seq__17980__$1);
var G__18021 = null;
var G__18022 = (0);
var G__18023 = (0);
seq__17980 = G__18020;
chunk__17981 = G__18021;
count__17982 = G__18022;
i__17983 = G__18023;
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

//# sourceMappingURL=repl.js.map?rel=1453415045558