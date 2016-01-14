// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.showdown');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4425__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4425__auto__)){
var ws = temp__4425__auto__;
return ws.length;
} else {
return null;
}
});
var conv_class_24604 = Showdown.converter;
var converter_24605 = (new conv_class_24604());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_24604,converter_24605){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_24605.makeHtml(markdown_txt);
});})(conv_class_24604,converter_24605))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches.call(null,/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.util.markdown","block-parser"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (p__24606,line){
var map__24607 = p__24606;
var map__24607__$1 = ((((!((map__24607 == null)))?((((map__24607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24607):map__24607);
var stage = cljs.core.get.call(null,map__24607__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_.call(null,line))?new cljs.core.Keyword(null,"delim","delim",1621565472):new cljs.core.Keyword(null,"line","line",212345235)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__24609,line){
var map__24610 = p__24609;
var map__24610__$1 = ((((!((map__24610 == null)))?((((map__24610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24610):map__24610);
var st = map__24610__$1;
var stage = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,clojure.string.trim.call(null,line));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__24612,line){
var map__24613 = p__24612;
var map__24613__$1 = ((((!((map__24613 == null)))?((((map__24613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24613):map__24613);
var st = map__24613__$1;
var stage = cljs.core.get.call(null,map__24613__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,cljs.core.subs.call(null,line,new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085).cljs$core$IFn$_invoke$arity$1(stage)));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__24615,line){
var map__24616 = p__24615;
var map__24616__$1 = ((((!((map__24616 == null)))?((((map__24616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24616):map__24616);
var st = map__24616__$1;
var stage = cljs.core.get.call(null,map__24616__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__24616__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
var lang = cljs.core.second.call(null,devcards.util.markdown.matches_delim_QMARK_.call(null,line));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"lang","lang",-1819677104),((clojure.string.blank_QMARK_.call(null,lang))?null:lang),new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085),devcards.util.markdown.leading_space_count.call(null,line),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__24618,line){
var map__24619 = p__24618;
var map__24619__$1 = ((((!((map__24619 == null)))?((((map__24619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24619):map__24619);
var st = map__24619__$1;
var stage = cljs.core.get.call(null,map__24619__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__24619__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
return cljs.core.reduce.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.PersistentVector.EMPTY], null),clojure.string.split.call(null,m,"\n"));
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__24627 = devcards.util.markdown.parse_out_blocks_STAR_.call(null,m);
var map__24627__$1 = ((((!((map__24627 == null)))?((((map__24627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24627):map__24627);
var stage = cljs.core.get.call(null,map__24627__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__24627__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.map.call(null,((function (map__24627,map__24627__$1,stage,accum){
return (function (x){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),((function (map__24627,map__24627__$1,stage,accum){
return (function (p1__24621_SHARP_){
return clojure.string.join.call(null,"\n",p1__24621_SHARP_);
});})(map__24627,map__24627__$1,stage,accum))
);
});})(map__24627,map__24627__$1,stage,accum))
,cljs.core.filter.call(null,((function (map__24627,map__24627__$1,stage,accum){
return (function (p__24629){
var map__24630 = p__24629;
var map__24630__$1 = ((((!((map__24630 == null)))?((((map__24630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24630):map__24630);
var content = cljs.core.get.call(null,map__24630__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.not_empty.call(null,content);
});})(map__24627,map__24627__$1,stage,accum))
,cljs.core.conj.call(null,accum,stage)));
});

//# sourceMappingURL=markdown.js.map?rel=1452098821388