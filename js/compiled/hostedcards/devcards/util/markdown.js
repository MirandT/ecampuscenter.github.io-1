// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4657__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4657__auto__)){
var ws = temp__4657__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__6409__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.leading_space_count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(cljs.core.truth_(devcards.util.markdown.is_bullet_item_QMARK_(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,margin);
} else {
return clojure.string.trim(s);
}
});
var conv_class_20656 = Showdown.converter;
var converter_20657 = (new conv_class_20656());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_20656,converter_20657){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_20657.makeHtml(markdown_txt);
});})(conv_class_20656,converter_20657))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__7334__auto__ = (function (){var G__20658 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20658) : cljs.core.atom.call(null,G__20658));
})();
var prefer_table__7335__auto__ = (function (){var G__20659 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20659) : cljs.core.atom.call(null,G__20659));
})();
var method_cache__7336__auto__ = (function (){var G__20660 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20660) : cljs.core.atom.call(null,G__20660));
})();
var cached_hierarchy__7337__auto__ = (function (){var G__20661 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20661) : cljs.core.atom.call(null,G__20661));
})();
var hierarchy__7338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),((function (method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__){
return (function (p__20662,line){
var map__20663 = p__20662;
var map__20663__$1 = ((((!((map__20663 == null)))?((((map__20663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20663):map__20663);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20663__$1,cljs.core.cst$kw$stage);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?cljs.core.cst$kw$delim:cljs.core.cst$kw$line),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$markdown], null),(function (p__20665,line){
var map__20666 = p__20665;
var map__20666__$1 = ((((!((map__20666 == null)))?((((map__20666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20666):map__20666);
var st = map__20666__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20666__$1,cljs.core.cst$kw$stage);
var left_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20666__$1,cljs.core.cst$kw$left_DASH_margin);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,devcards.util.markdown.strip_left_margin(line,left_margin));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$code_DASH_block], null),(function (p__20668,line){
var map__20669 = p__20668;
var map__20669__$1 = ((((!((map__20669 == null)))?((((map__20669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20669):map__20669);
var st = map__20669__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20669__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,cljs.core.cst$kw$leading_DASH_spaces.cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$markdown], null),(function (p__20671,line){
var map__20672 = p__20671;
var map__20672__$1 = ((((!((map__20672 == null)))?((((map__20672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20672):map__20672);
var st = map__20672__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20672__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20672__$1,cljs.core.cst$kw$accum);
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$code_DASH_block,cljs.core.cst$kw$lang,((clojure.string.blank_QMARK_(lang))?null:lang),cljs.core.cst$kw$leading_DASH_spaces,devcards.util.markdown.leading_space_count(line),cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$code_DASH_block], null),(function (p__20674,line){
var map__20675 = p__20674;
var map__20675__$1 = ((((!((map__20675 == null)))?((((map__20675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20675):map__20675);
var st = map__20675__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20675__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20675__$1,cljs.core.cst$kw$accum);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$accum,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$left_DASH_margin,devcards.util.markdown.bullets_left_edge(lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__20683 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__20683__$1 = ((((!((map__20683 == null)))?((((map__20683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20683):map__20683);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20683__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20683__$1,cljs.core.cst$kw$accum);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20683,map__20683__$1,stage,accum){
return (function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content], null),((function (map__20683,map__20683__$1,stage,accum){
return (function (p1__20677_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__20677_SHARP_);
});})(map__20683,map__20683__$1,stage,accum))
);
});})(map__20683,map__20683__$1,stage,accum))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20683,map__20683__$1,stage,accum){
return (function (p__20685){
var map__20686 = p__20685;
var map__20686__$1 = ((((!((map__20686 == null)))?((((map__20686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20686):map__20686);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20686__$1,cljs.core.cst$kw$content);
return cljs.core.not_empty(content);
});})(map__20683,map__20683__$1,stage,accum))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});
