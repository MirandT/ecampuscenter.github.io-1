// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38824){
var map__38849 = p__38824;
var map__38849__$1 = ((((!((map__38849 == null)))?((((map__38849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38849):map__38849);
var m = map__38849__$1;
var n = cljs.core.get.call(null,map__38849__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38851_38873 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38852_38874 = null;
var count__38853_38875 = (0);
var i__38854_38876 = (0);
while(true){
if((i__38854_38876 < count__38853_38875)){
var f_38877 = cljs.core._nth.call(null,chunk__38852_38874,i__38854_38876);
cljs.core.println.call(null,"  ",f_38877);

var G__38878 = seq__38851_38873;
var G__38879 = chunk__38852_38874;
var G__38880 = count__38853_38875;
var G__38881 = (i__38854_38876 + (1));
seq__38851_38873 = G__38878;
chunk__38852_38874 = G__38879;
count__38853_38875 = G__38880;
i__38854_38876 = G__38881;
continue;
} else {
var temp__4657__auto___38882 = cljs.core.seq.call(null,seq__38851_38873);
if(temp__4657__auto___38882){
var seq__38851_38883__$1 = temp__4657__auto___38882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38851_38883__$1)){
var c__25571__auto___38884 = cljs.core.chunk_first.call(null,seq__38851_38883__$1);
var G__38885 = cljs.core.chunk_rest.call(null,seq__38851_38883__$1);
var G__38886 = c__25571__auto___38884;
var G__38887 = cljs.core.count.call(null,c__25571__auto___38884);
var G__38888 = (0);
seq__38851_38873 = G__38885;
chunk__38852_38874 = G__38886;
count__38853_38875 = G__38887;
i__38854_38876 = G__38888;
continue;
} else {
var f_38889 = cljs.core.first.call(null,seq__38851_38883__$1);
cljs.core.println.call(null,"  ",f_38889);

var G__38890 = cljs.core.next.call(null,seq__38851_38883__$1);
var G__38891 = null;
var G__38892 = (0);
var G__38893 = (0);
seq__38851_38873 = G__38890;
chunk__38852_38874 = G__38891;
count__38853_38875 = G__38892;
i__38854_38876 = G__38893;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38894 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24760__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38894);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38894)))?cljs.core.second.call(null,arglists_38894):arglists_38894));
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
var seq__38855_38895 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38856_38896 = null;
var count__38857_38897 = (0);
var i__38858_38898 = (0);
while(true){
if((i__38858_38898 < count__38857_38897)){
var vec__38859_38899 = cljs.core._nth.call(null,chunk__38856_38896,i__38858_38898);
var name_38900 = cljs.core.nth.call(null,vec__38859_38899,(0),null);
var map__38862_38901 = cljs.core.nth.call(null,vec__38859_38899,(1),null);
var map__38862_38902__$1 = ((((!((map__38862_38901 == null)))?((((map__38862_38901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38862_38901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38862_38901):map__38862_38901);
var doc_38903 = cljs.core.get.call(null,map__38862_38902__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38904 = cljs.core.get.call(null,map__38862_38902__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38900);

cljs.core.println.call(null," ",arglists_38904);

if(cljs.core.truth_(doc_38903)){
cljs.core.println.call(null," ",doc_38903);
} else {
}

var G__38905 = seq__38855_38895;
var G__38906 = chunk__38856_38896;
var G__38907 = count__38857_38897;
var G__38908 = (i__38858_38898 + (1));
seq__38855_38895 = G__38905;
chunk__38856_38896 = G__38906;
count__38857_38897 = G__38907;
i__38858_38898 = G__38908;
continue;
} else {
var temp__4657__auto___38909 = cljs.core.seq.call(null,seq__38855_38895);
if(temp__4657__auto___38909){
var seq__38855_38910__$1 = temp__4657__auto___38909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38855_38910__$1)){
var c__25571__auto___38911 = cljs.core.chunk_first.call(null,seq__38855_38910__$1);
var G__38912 = cljs.core.chunk_rest.call(null,seq__38855_38910__$1);
var G__38913 = c__25571__auto___38911;
var G__38914 = cljs.core.count.call(null,c__25571__auto___38911);
var G__38915 = (0);
seq__38855_38895 = G__38912;
chunk__38856_38896 = G__38913;
count__38857_38897 = G__38914;
i__38858_38898 = G__38915;
continue;
} else {
var vec__38864_38916 = cljs.core.first.call(null,seq__38855_38910__$1);
var name_38917 = cljs.core.nth.call(null,vec__38864_38916,(0),null);
var map__38867_38918 = cljs.core.nth.call(null,vec__38864_38916,(1),null);
var map__38867_38919__$1 = ((((!((map__38867_38918 == null)))?((((map__38867_38918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38867_38918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38867_38918):map__38867_38918);
var doc_38920 = cljs.core.get.call(null,map__38867_38919__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38921 = cljs.core.get.call(null,map__38867_38919__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38917);

cljs.core.println.call(null," ",arglists_38921);

if(cljs.core.truth_(doc_38920)){
cljs.core.println.call(null," ",doc_38920);
} else {
}

var G__38922 = cljs.core.next.call(null,seq__38855_38910__$1);
var G__38923 = null;
var G__38924 = (0);
var G__38925 = (0);
seq__38855_38895 = G__38922;
chunk__38856_38896 = G__38923;
count__38857_38897 = G__38924;
i__38858_38898 = G__38925;
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

var seq__38869 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38870 = null;
var count__38871 = (0);
var i__38872 = (0);
while(true){
if((i__38872 < count__38871)){
var role = cljs.core._nth.call(null,chunk__38870,i__38872);
var temp__4657__auto___38926__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38926__$1)){
var spec_38927 = temp__4657__auto___38926__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38927));
} else {
}

var G__38928 = seq__38869;
var G__38929 = chunk__38870;
var G__38930 = count__38871;
var G__38931 = (i__38872 + (1));
seq__38869 = G__38928;
chunk__38870 = G__38929;
count__38871 = G__38930;
i__38872 = G__38931;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38869);
if(temp__4657__auto____$1){
var seq__38869__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38869__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__38869__$1);
var G__38932 = cljs.core.chunk_rest.call(null,seq__38869__$1);
var G__38933 = c__25571__auto__;
var G__38934 = cljs.core.count.call(null,c__25571__auto__);
var G__38935 = (0);
seq__38869 = G__38932;
chunk__38870 = G__38933;
count__38871 = G__38934;
i__38872 = G__38935;
continue;
} else {
var role = cljs.core.first.call(null,seq__38869__$1);
var temp__4657__auto___38936__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38936__$2)){
var spec_38937 = temp__4657__auto___38936__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38937));
} else {
}

var G__38938 = cljs.core.next.call(null,seq__38869__$1);
var G__38939 = null;
var G__38940 = (0);
var G__38941 = (0);
seq__38869 = G__38938;
chunk__38870 = G__38939;
count__38871 = G__38940;
i__38872 = G__38941;
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

//# sourceMappingURL=repl.js.map?rel=1481153827978