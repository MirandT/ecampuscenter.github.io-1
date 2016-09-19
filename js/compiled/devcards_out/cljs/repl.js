// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31822){
var map__31847 = p__31822;
var map__31847__$1 = ((((!((map__31847 == null)))?((((map__31847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31847):map__31847);
var m = map__31847__$1;
var n = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31849_31871 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31850_31872 = null;
var count__31851_31873 = (0);
var i__31852_31874 = (0);
while(true){
if((i__31852_31874 < count__31851_31873)){
var f_31875 = cljs.core._nth.call(null,chunk__31850_31872,i__31852_31874);
cljs.core.println.call(null,"  ",f_31875);

var G__31876 = seq__31849_31871;
var G__31877 = chunk__31850_31872;
var G__31878 = count__31851_31873;
var G__31879 = (i__31852_31874 + (1));
seq__31849_31871 = G__31876;
chunk__31850_31872 = G__31877;
count__31851_31873 = G__31878;
i__31852_31874 = G__31879;
continue;
} else {
var temp__4657__auto___31880 = cljs.core.seq.call(null,seq__31849_31871);
if(temp__4657__auto___31880){
var seq__31849_31881__$1 = temp__4657__auto___31880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31849_31881__$1)){
var c__19527__auto___31882 = cljs.core.chunk_first.call(null,seq__31849_31881__$1);
var G__31883 = cljs.core.chunk_rest.call(null,seq__31849_31881__$1);
var G__31884 = c__19527__auto___31882;
var G__31885 = cljs.core.count.call(null,c__19527__auto___31882);
var G__31886 = (0);
seq__31849_31871 = G__31883;
chunk__31850_31872 = G__31884;
count__31851_31873 = G__31885;
i__31852_31874 = G__31886;
continue;
} else {
var f_31887 = cljs.core.first.call(null,seq__31849_31881__$1);
cljs.core.println.call(null,"  ",f_31887);

var G__31888 = cljs.core.next.call(null,seq__31849_31881__$1);
var G__31889 = null;
var G__31890 = (0);
var G__31891 = (0);
seq__31849_31871 = G__31888;
chunk__31850_31872 = G__31889;
count__31851_31873 = G__31890;
i__31852_31874 = G__31891;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31892 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18716__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31892);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31892)))?cljs.core.second.call(null,arglists_31892):arglists_31892));
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
var seq__31853_31893 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31854_31894 = null;
var count__31855_31895 = (0);
var i__31856_31896 = (0);
while(true){
if((i__31856_31896 < count__31855_31895)){
var vec__31857_31897 = cljs.core._nth.call(null,chunk__31854_31894,i__31856_31896);
var name_31898 = cljs.core.nth.call(null,vec__31857_31897,(0),null);
var map__31860_31899 = cljs.core.nth.call(null,vec__31857_31897,(1),null);
var map__31860_31900__$1 = ((((!((map__31860_31899 == null)))?((((map__31860_31899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31860_31899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860_31899):map__31860_31899);
var doc_31901 = cljs.core.get.call(null,map__31860_31900__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31902 = cljs.core.get.call(null,map__31860_31900__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31898);

cljs.core.println.call(null," ",arglists_31902);

if(cljs.core.truth_(doc_31901)){
cljs.core.println.call(null," ",doc_31901);
} else {
}

var G__31903 = seq__31853_31893;
var G__31904 = chunk__31854_31894;
var G__31905 = count__31855_31895;
var G__31906 = (i__31856_31896 + (1));
seq__31853_31893 = G__31903;
chunk__31854_31894 = G__31904;
count__31855_31895 = G__31905;
i__31856_31896 = G__31906;
continue;
} else {
var temp__4657__auto___31907 = cljs.core.seq.call(null,seq__31853_31893);
if(temp__4657__auto___31907){
var seq__31853_31908__$1 = temp__4657__auto___31907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31853_31908__$1)){
var c__19527__auto___31909 = cljs.core.chunk_first.call(null,seq__31853_31908__$1);
var G__31910 = cljs.core.chunk_rest.call(null,seq__31853_31908__$1);
var G__31911 = c__19527__auto___31909;
var G__31912 = cljs.core.count.call(null,c__19527__auto___31909);
var G__31913 = (0);
seq__31853_31893 = G__31910;
chunk__31854_31894 = G__31911;
count__31855_31895 = G__31912;
i__31856_31896 = G__31913;
continue;
} else {
var vec__31862_31914 = cljs.core.first.call(null,seq__31853_31908__$1);
var name_31915 = cljs.core.nth.call(null,vec__31862_31914,(0),null);
var map__31865_31916 = cljs.core.nth.call(null,vec__31862_31914,(1),null);
var map__31865_31917__$1 = ((((!((map__31865_31916 == null)))?((((map__31865_31916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31865_31916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31865_31916):map__31865_31916);
var doc_31918 = cljs.core.get.call(null,map__31865_31917__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31919 = cljs.core.get.call(null,map__31865_31917__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31915);

cljs.core.println.call(null," ",arglists_31919);

if(cljs.core.truth_(doc_31918)){
cljs.core.println.call(null," ",doc_31918);
} else {
}

var G__31920 = cljs.core.next.call(null,seq__31853_31908__$1);
var G__31921 = null;
var G__31922 = (0);
var G__31923 = (0);
seq__31853_31893 = G__31920;
chunk__31854_31894 = G__31921;
count__31855_31895 = G__31922;
i__31856_31896 = G__31923;
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

var seq__31867 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31868 = null;
var count__31869 = (0);
var i__31870 = (0);
while(true){
if((i__31870 < count__31869)){
var role = cljs.core._nth.call(null,chunk__31868,i__31870);
var temp__4657__auto___31924__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31924__$1)){
var spec_31925 = temp__4657__auto___31924__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31925));
} else {
}

var G__31926 = seq__31867;
var G__31927 = chunk__31868;
var G__31928 = count__31869;
var G__31929 = (i__31870 + (1));
seq__31867 = G__31926;
chunk__31868 = G__31927;
count__31869 = G__31928;
i__31870 = G__31929;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__31867);
if(temp__4657__auto____$1){
var seq__31867__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31867__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__31867__$1);
var G__31930 = cljs.core.chunk_rest.call(null,seq__31867__$1);
var G__31931 = c__19527__auto__;
var G__31932 = cljs.core.count.call(null,c__19527__auto__);
var G__31933 = (0);
seq__31867 = G__31930;
chunk__31868 = G__31931;
count__31869 = G__31932;
i__31870 = G__31933;
continue;
} else {
var role = cljs.core.first.call(null,seq__31867__$1);
var temp__4657__auto___31934__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31934__$2)){
var spec_31935 = temp__4657__auto___31934__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31935));
} else {
}

var G__31936 = cljs.core.next.call(null,seq__31867__$1);
var G__31937 = null;
var G__31938 = (0);
var G__31939 = (0);
seq__31867 = G__31936;
chunk__31868 = G__31937;
count__31869 = G__31938;
i__31870 = G__31939;
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

//# sourceMappingURL=repl.js.map?rel=1474300072613