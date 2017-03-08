// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37971){
var map__37996 = p__37971;
var map__37996__$1 = ((((!((map__37996 == null)))?((((map__37996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37996):map__37996);
var m = map__37996__$1;
var n = cljs.core.get.call(null,map__37996__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__37998_38020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37999_38021 = null;
var count__38000_38022 = (0);
var i__38001_38023 = (0);
while(true){
if((i__38001_38023 < count__38000_38022)){
var f_38024 = cljs.core._nth.call(null,chunk__37999_38021,i__38001_38023);
cljs.core.println.call(null,"  ",f_38024);

var G__38025 = seq__37998_38020;
var G__38026 = chunk__37999_38021;
var G__38027 = count__38000_38022;
var G__38028 = (i__38001_38023 + (1));
seq__37998_38020 = G__38025;
chunk__37999_38021 = G__38026;
count__38000_38022 = G__38027;
i__38001_38023 = G__38028;
continue;
} else {
var temp__4657__auto___38029 = cljs.core.seq.call(null,seq__37998_38020);
if(temp__4657__auto___38029){
var seq__37998_38030__$1 = temp__4657__auto___38029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37998_38030__$1)){
var c__25571__auto___38031 = cljs.core.chunk_first.call(null,seq__37998_38030__$1);
var G__38032 = cljs.core.chunk_rest.call(null,seq__37998_38030__$1);
var G__38033 = c__25571__auto___38031;
var G__38034 = cljs.core.count.call(null,c__25571__auto___38031);
var G__38035 = (0);
seq__37998_38020 = G__38032;
chunk__37999_38021 = G__38033;
count__38000_38022 = G__38034;
i__38001_38023 = G__38035;
continue;
} else {
var f_38036 = cljs.core.first.call(null,seq__37998_38030__$1);
cljs.core.println.call(null,"  ",f_38036);

var G__38037 = cljs.core.next.call(null,seq__37998_38030__$1);
var G__38038 = null;
var G__38039 = (0);
var G__38040 = (0);
seq__37998_38020 = G__38037;
chunk__37999_38021 = G__38038;
count__38000_38022 = G__38039;
i__38001_38023 = G__38040;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38041 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24760__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38041);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38041)))?cljs.core.second.call(null,arglists_38041):arglists_38041));
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
var seq__38002_38042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38003_38043 = null;
var count__38004_38044 = (0);
var i__38005_38045 = (0);
while(true){
if((i__38005_38045 < count__38004_38044)){
var vec__38006_38046 = cljs.core._nth.call(null,chunk__38003_38043,i__38005_38045);
var name_38047 = cljs.core.nth.call(null,vec__38006_38046,(0),null);
var map__38009_38048 = cljs.core.nth.call(null,vec__38006_38046,(1),null);
var map__38009_38049__$1 = ((((!((map__38009_38048 == null)))?((((map__38009_38048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38009_38048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38009_38048):map__38009_38048);
var doc_38050 = cljs.core.get.call(null,map__38009_38049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38051 = cljs.core.get.call(null,map__38009_38049__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38047);

cljs.core.println.call(null," ",arglists_38051);

if(cljs.core.truth_(doc_38050)){
cljs.core.println.call(null," ",doc_38050);
} else {
}

var G__38052 = seq__38002_38042;
var G__38053 = chunk__38003_38043;
var G__38054 = count__38004_38044;
var G__38055 = (i__38005_38045 + (1));
seq__38002_38042 = G__38052;
chunk__38003_38043 = G__38053;
count__38004_38044 = G__38054;
i__38005_38045 = G__38055;
continue;
} else {
var temp__4657__auto___38056 = cljs.core.seq.call(null,seq__38002_38042);
if(temp__4657__auto___38056){
var seq__38002_38057__$1 = temp__4657__auto___38056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38002_38057__$1)){
var c__25571__auto___38058 = cljs.core.chunk_first.call(null,seq__38002_38057__$1);
var G__38059 = cljs.core.chunk_rest.call(null,seq__38002_38057__$1);
var G__38060 = c__25571__auto___38058;
var G__38061 = cljs.core.count.call(null,c__25571__auto___38058);
var G__38062 = (0);
seq__38002_38042 = G__38059;
chunk__38003_38043 = G__38060;
count__38004_38044 = G__38061;
i__38005_38045 = G__38062;
continue;
} else {
var vec__38011_38063 = cljs.core.first.call(null,seq__38002_38057__$1);
var name_38064 = cljs.core.nth.call(null,vec__38011_38063,(0),null);
var map__38014_38065 = cljs.core.nth.call(null,vec__38011_38063,(1),null);
var map__38014_38066__$1 = ((((!((map__38014_38065 == null)))?((((map__38014_38065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38014_38065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38014_38065):map__38014_38065);
var doc_38067 = cljs.core.get.call(null,map__38014_38066__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38068 = cljs.core.get.call(null,map__38014_38066__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38064);

cljs.core.println.call(null," ",arglists_38068);

if(cljs.core.truth_(doc_38067)){
cljs.core.println.call(null," ",doc_38067);
} else {
}

var G__38069 = cljs.core.next.call(null,seq__38002_38057__$1);
var G__38070 = null;
var G__38071 = (0);
var G__38072 = (0);
seq__38002_38042 = G__38069;
chunk__38003_38043 = G__38070;
count__38004_38044 = G__38071;
i__38005_38045 = G__38072;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38016 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38017 = null;
var count__38018 = (0);
var i__38019 = (0);
while(true){
if((i__38019 < count__38018)){
var role = cljs.core._nth.call(null,chunk__38017,i__38019);
var temp__4657__auto___38073__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38073__$1)){
var spec_38074 = temp__4657__auto___38073__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38074));
} else {
}

var G__38075 = seq__38016;
var G__38076 = chunk__38017;
var G__38077 = count__38018;
var G__38078 = (i__38019 + (1));
seq__38016 = G__38075;
chunk__38017 = G__38076;
count__38018 = G__38077;
i__38019 = G__38078;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38016);
if(temp__4657__auto____$1){
var seq__38016__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38016__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__38016__$1);
var G__38079 = cljs.core.chunk_rest.call(null,seq__38016__$1);
var G__38080 = c__25571__auto__;
var G__38081 = cljs.core.count.call(null,c__25571__auto__);
var G__38082 = (0);
seq__38016 = G__38079;
chunk__38017 = G__38080;
count__38018 = G__38081;
i__38019 = G__38082;
continue;
} else {
var role = cljs.core.first.call(null,seq__38016__$1);
var temp__4657__auto___38083__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38083__$2)){
var spec_38084 = temp__4657__auto___38083__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38084));
} else {
}

var G__38085 = cljs.core.next.call(null,seq__38016__$1);
var G__38086 = null;
var G__38087 = (0);
var G__38088 = (0);
seq__38016 = G__38085;
chunk__38017 = G__38086;
count__38018 = G__38087;
i__38019 = G__38088;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1488930789134