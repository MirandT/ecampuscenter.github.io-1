// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__6409__auto__ = (function (){var and__6397__auto__ = typeof Symbol !== 'undefined';
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__6397__auto____$1){
var and__6397__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__6397__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__20690_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__20690_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args20691 = [];
var len__7484__auto___20694 = arguments.length;
var i__7485__auto___20695 = (0);
while(true){
if((i__7485__auto___20695 < len__7484__auto___20694)){
args20691.push((arguments[i__7485__auto___20695]));

var G__20696 = (i__7485__auto___20695 + (1));
i__7485__auto___20695 = G__20696;
continue;
} else {
}
break;
}

var G__20693 = args20691.length;
switch (G__20693) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20691.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__6397__auto__ = cljs.core.map_QMARK_(c);
if(and__6397__auto__){
var map__20704 = c;
var map__20704__$1 = ((((!((map__20704 == null)))?((((map__20704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20704):map__20704);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20704__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20704__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__6397__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__19711__auto___20724 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__20706 = "pre";
var G__20707 = ({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__20709 = this$;
var G__20710 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20709,G__20710) : devcards.core.get_props.call(null,G__20709,G__20710));
})())});
var G__20708 = (function (){var G__20711 = "code";
var G__20712 = ({"className": (function (){var or__6409__auto__ = (function (){var G__20716 = this$;
var G__20717 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20716,G__20717) : devcards.core.get_props.call(null,G__20716,G__20717));
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__20713 = sablono.interpreter.interpret((function (){var G__20718 = this$;
var G__20719 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20718,G__20719) : devcards.core.get_props.call(null,G__20718,G__20719));
})());
return React.createElement(G__20711,G__20712,G__20713);
})();
return React.createElement(G__20706,G__20707,G__20708);
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__19711__auto___20724);
}

var seq__20720_20725 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20721_20726 = null;
var count__20722_20727 = (0);
var i__20723_20728 = (0);
while(true){
if((i__20723_20728 < count__20722_20727)){
var property__19712__auto___20729 = chunk__20721_20726.cljs$core$IIndexed$_nth$arity$2(null,i__20723_20728);
if(cljs.core.truth_((base__19711__auto___20724[property__19712__auto___20729]))){
(devcards.core.CodeHighlight.prototype[property__19712__auto___20729] = (base__19711__auto___20724[property__19712__auto___20729]));
} else {
}

var G__20730 = seq__20720_20725;
var G__20731 = chunk__20721_20726;
var G__20732 = count__20722_20727;
var G__20733 = (i__20723_20728 + (1));
seq__20720_20725 = G__20730;
chunk__20721_20726 = G__20731;
count__20722_20727 = G__20732;
i__20723_20728 = G__20733;
continue;
} else {
var temp__4657__auto___20734 = cljs.core.seq(seq__20720_20725);
if(temp__4657__auto___20734){
var seq__20720_20735__$1 = temp__4657__auto___20734;
if(cljs.core.chunked_seq_QMARK_(seq__20720_20735__$1)){
var c__7220__auto___20736 = cljs.core.chunk_first(seq__20720_20735__$1);
var G__20737 = cljs.core.chunk_rest(seq__20720_20735__$1);
var G__20738 = c__7220__auto___20736;
var G__20739 = cljs.core.count(c__7220__auto___20736);
var G__20740 = (0);
seq__20720_20725 = G__20737;
chunk__20721_20726 = G__20738;
count__20722_20727 = G__20739;
i__20723_20728 = G__20740;
continue;
} else {
var property__19712__auto___20741 = cljs.core.first(seq__20720_20735__$1);
if(cljs.core.truth_((base__19711__auto___20724[property__19712__auto___20741]))){
(devcards.core.CodeHighlight.prototype[property__19712__auto___20741] = (base__19711__auto___20724[property__19712__auto___20741]));
} else {
}

var G__20742 = cljs.core.next(seq__20720_20735__$1);
var G__20743 = null;
var G__20744 = (0);
var G__20745 = (0);
seq__20720_20725 = G__20742;
chunk__20721_20726 = G__20743;
count__20722_20727 = G__20744;
i__20723_20728 = G__20745;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__20748 = devcards.core.CodeHighlight;
var G__20749 = ({"code": code_str, "lang": lang});
return React.createElement(G__20748,G__20749);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__7334__auto__ = (function (){var G__20750 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20750) : cljs.core.atom.call(null,G__20750));
})();
var prefer_table__7335__auto__ = (function (){var G__20751 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20751) : cljs.core.atom.call(null,G__20751));
})();
var method_cache__7336__auto__ = (function (){var G__20752 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20752) : cljs.core.atom.call(null,G__20752));
})();
var cached_hierarchy__7337__auto__ = (function (){var G__20753 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20753) : cljs.core.atom.call(null,G__20753));
})();
var hierarchy__7338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__20754){
var map__20755 = p__20754;
var map__20755__$1 = ((((!((map__20755 == null)))?((((map__20755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20755):map__20755);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20755__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__20757){
var map__20758 = p__20757;
var map__20758__$1 = ((((!((map__20758 == null)))?((((map__20758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20758):map__20758);
var block = map__20758__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20758__$1,cljs.core.cst$kw$content);
var G__20760 = devcards.core.CodeHighlight;
var G__20761 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return React.createElement(G__20760,G__20761);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__7491__auto__ = [];
var len__7484__auto___20772 = arguments.length;
var i__7485__auto___20773 = (0);
while(true){
if((i__7485__auto___20773 < len__7484__auto___20772)){
args__7491__auto__.push((arguments[i__7485__auto___20773]));

var G__20774 = (i__7485__auto___20773 + (1));
i__7485__auto___20773 = G__20774;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var G__20763 = "div";
var G__20764 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__20765 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__20763,G__20764,blocks,strs__$1){
return (function (i,data){
var G__20766 = "div";
var G__20767 = ({"key": i});
var G__20768 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__20766,G__20767,G__20768);
});})(G__20763,G__20764,blocks,strs__$1))
,blocks));
return React.createElement(G__20763,G__20764,G__20765);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__20769 = "div";
var G__20770 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__20771 = sablono.interpreter.interpret(message);
return React.createElement(G__20769,G__20770,G__20771);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq20762){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20762));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__20779 = "div";
var G__20780 = ({"key": "devcards_naked-card", "className": (function (){var G__20782 = devcards.system.devcards_rendered_card_class;
var G__20782__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__20782),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__20782);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str(G__20782__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__20782__$1;
}
})()});
var G__20781 = sablono.interpreter.interpret(children);
return React.createElement(G__20779,G__20780,G__20781);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args20783 = [];
var len__7484__auto___20805 = arguments.length;
var i__7485__auto___20806 = (0);
while(true){
if((i__7485__auto___20806 < len__7484__auto___20805)){
args20783.push((arguments[i__7485__auto___20806]));

var G__20807 = (i__7485__auto___20806 + (1));
i__7485__auto___20806 = G__20807;
continue;
} else {
}
break;
}

var G__20785 = args20783.length;
switch (G__20785) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20783.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__20786 = card;
var map__20786__$1 = ((((!((map__20786 == null)))?((((map__20786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20786):map__20786);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__20788 = "div";
var G__20789 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))});
var G__20790 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20788,G__20789,G__20790);
} else {
var G__20791 = "div";
var G__20792 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__20793 = (function (){var G__20795 = "div";
var G__20796 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__20797 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__20798 = "a";
var G__20799 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__20798,G__20795,G__20796,G__20791,G__20792,map__20786,map__20786__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__20798,G__20795,G__20796,G__20791,G__20792,map__20786,map__20786__$1,path,options))
)});
var G__20800 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__20801 = " ";
return React.createElement(G__20798,G__20799,G__20800,G__20801);
})()):sablono.interpreter.interpret((function (){var attrs20802 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs20802))?sablono.interpreter.attributes(attrs20802):null),((cljs.core.map_QMARK_(attrs20802))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20802)], null)));
})()));
return React.createElement(G__20795,G__20796,G__20797);
})();
var G__20794 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20791,G__20792,G__20793,G__20794);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (devcards.core._devcard_options[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7073__auto__.call(null,this$,devcard_opts));
} else {
var m__7073__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7073__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (devcards.core._devcard[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7073__auto__.call(null,this$,devcard_opts));
} else {
var m__7073__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7073__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
var base__19711__auto___20814 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs20809 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20809))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs20809], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs20809))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20809)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__19711__auto___20814);
}

var seq__20810_20815 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20811_20816 = null;
var count__20812_20817 = (0);
var i__20813_20818 = (0);
while(true){
if((i__20813_20818 < count__20812_20817)){
var property__19712__auto___20819 = chunk__20811_20816.cljs$core$IIndexed$_nth$arity$2(null,i__20813_20818);
if(cljs.core.truth_((base__19711__auto___20814[property__19712__auto___20819]))){
(devcards.core.DontUpdate.prototype[property__19712__auto___20819] = (base__19711__auto___20814[property__19712__auto___20819]));
} else {
}

var G__20820 = seq__20810_20815;
var G__20821 = chunk__20811_20816;
var G__20822 = count__20812_20817;
var G__20823 = (i__20813_20818 + (1));
seq__20810_20815 = G__20820;
chunk__20811_20816 = G__20821;
count__20812_20817 = G__20822;
i__20813_20818 = G__20823;
continue;
} else {
var temp__4657__auto___20824 = cljs.core.seq(seq__20810_20815);
if(temp__4657__auto___20824){
var seq__20810_20825__$1 = temp__4657__auto___20824;
if(cljs.core.chunked_seq_QMARK_(seq__20810_20825__$1)){
var c__7220__auto___20826 = cljs.core.chunk_first(seq__20810_20825__$1);
var G__20827 = cljs.core.chunk_rest(seq__20810_20825__$1);
var G__20828 = c__7220__auto___20826;
var G__20829 = cljs.core.count(c__7220__auto___20826);
var G__20830 = (0);
seq__20810_20815 = G__20827;
chunk__20811_20816 = G__20828;
count__20812_20817 = G__20829;
i__20813_20818 = G__20830;
continue;
} else {
var property__19712__auto___20831 = cljs.core.first(seq__20810_20825__$1);
if(cljs.core.truth_((base__19711__auto___20814[property__19712__auto___20831]))){
(devcards.core.DontUpdate.prototype[property__19712__auto___20831] = (base__19711__auto___20814[property__19712__auto___20831]));
} else {
}

var G__20832 = cljs.core.next(seq__20810_20825__$1);
var G__20833 = null;
var G__20834 = (0);
var G__20835 = (0);
seq__20810_20815 = G__20832;
chunk__20811_20816 = G__20833;
count__20812_20817 = G__20834;
i__20813_20818 = G__20835;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__20838 = devcards.core.DontUpdate;
var G__20839 = ({"change_count": change_count, "children_thunk": children_thunk});
return React.createElement(G__20838,G__20839);
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__6409__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__4657__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom))):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var main__$1 = (function (){var G__20848 = "div";
var G__20849 = ({"key": "devcards-main-section"});
var G__20850 = sablono.interpreter.interpret(main);
return React.createElement(G__20848,G__20849,G__20850);
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var x__7243__auto__ = document;
return cljs.core._conj((function (){var x__7243__auto____$1 = main__$1;
return cljs.core._conj((function (){var x__7243__auto____$2 = hist_ctl;
return cljs.core._conj((function (){var x__7243__auto____$3 = edn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto____$3);
})(),x__7243__auto____$2);
})(),x__7243__auto____$1);
})(),x__7243__auto__);
})());
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__20851 = "div";
var G__20852 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__20853 = sablono.interpreter.interpret(children);
return React.createElement(G__20851,G__20852,G__20853);
}
});
var base__19711__auto___20858 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__6409__auto__ = (function (){var and__6397__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__6397__auto__)){
return this$.state;
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__6397__auto__ = data_atom;
if(cljs.core.truth_(and__6397__auto__)){
return id;
} else {
return and__6397__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var change_count = devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count);
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__19711__auto___20858);
}

var seq__20854_20859 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20855_20860 = null;
var count__20856_20861 = (0);
var i__20857_20862 = (0);
while(true){
if((i__20857_20862 < count__20856_20861)){
var property__19712__auto___20863 = chunk__20855_20860.cljs$core$IIndexed$_nth$arity$2(null,i__20857_20862);
if(cljs.core.truth_((base__19711__auto___20858[property__19712__auto___20863]))){
(devcards.core.DevcardBase.prototype[property__19712__auto___20863] = (base__19711__auto___20858[property__19712__auto___20863]));
} else {
}

var G__20864 = seq__20854_20859;
var G__20865 = chunk__20855_20860;
var G__20866 = count__20856_20861;
var G__20867 = (i__20857_20862 + (1));
seq__20854_20859 = G__20864;
chunk__20855_20860 = G__20865;
count__20856_20861 = G__20866;
i__20857_20862 = G__20867;
continue;
} else {
var temp__4657__auto___20868 = cljs.core.seq(seq__20854_20859);
if(temp__4657__auto___20868){
var seq__20854_20869__$1 = temp__4657__auto___20868;
if(cljs.core.chunked_seq_QMARK_(seq__20854_20869__$1)){
var c__7220__auto___20870 = cljs.core.chunk_first(seq__20854_20869__$1);
var G__20871 = cljs.core.chunk_rest(seq__20854_20869__$1);
var G__20872 = c__7220__auto___20870;
var G__20873 = cljs.core.count(c__7220__auto___20870);
var G__20874 = (0);
seq__20854_20859 = G__20871;
chunk__20855_20860 = G__20872;
count__20856_20861 = G__20873;
i__20857_20862 = G__20874;
continue;
} else {
var property__19712__auto___20875 = cljs.core.first(seq__20854_20869__$1);
if(cljs.core.truth_((base__19711__auto___20858[property__19712__auto___20875]))){
(devcards.core.DevcardBase.prototype[property__19712__auto___20875] = (base__19711__auto___20858[property__19712__auto___20875]));
} else {
}

var G__20876 = cljs.core.next(seq__20854_20869__$1);
var G__20877 = null;
var G__20878 = (0);
var G__20879 = (0);
seq__20854_20859 = G__20876;
chunk__20855_20860 = G__20877;
count__20856_20861 = G__20878;
i__20857_20862 = G__20879;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__4657__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
var G__20880 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20881 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__20880,G__20881) : node_fn.call(null,G__20880,G__20881));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__19711__auto___20888 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__6397__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__20882 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__20883 = "Card has not mounted DOM node.";
return React.DOM.div(G__20882,G__20883);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__19711__auto___20888);
}

var seq__20884_20889 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20885_20890 = null;
var count__20886_20891 = (0);
var i__20887_20892 = (0);
while(true){
if((i__20887_20892 < count__20886_20891)){
var property__19712__auto___20893 = chunk__20885_20890.cljs$core$IIndexed$_nth$arity$2(null,i__20887_20892);
if(cljs.core.truth_((base__19711__auto___20888[property__19712__auto___20893]))){
(devcards.core.DomComponent.prototype[property__19712__auto___20893] = (base__19711__auto___20888[property__19712__auto___20893]));
} else {
}

var G__20894 = seq__20884_20889;
var G__20895 = chunk__20885_20890;
var G__20896 = count__20886_20891;
var G__20897 = (i__20887_20892 + (1));
seq__20884_20889 = G__20894;
chunk__20885_20890 = G__20895;
count__20886_20891 = G__20896;
i__20887_20892 = G__20897;
continue;
} else {
var temp__4657__auto___20898 = cljs.core.seq(seq__20884_20889);
if(temp__4657__auto___20898){
var seq__20884_20899__$1 = temp__4657__auto___20898;
if(cljs.core.chunked_seq_QMARK_(seq__20884_20899__$1)){
var c__7220__auto___20900 = cljs.core.chunk_first(seq__20884_20899__$1);
var G__20901 = cljs.core.chunk_rest(seq__20884_20899__$1);
var G__20902 = c__7220__auto___20900;
var G__20903 = cljs.core.count(c__7220__auto___20900);
var G__20904 = (0);
seq__20884_20889 = G__20901;
chunk__20885_20890 = G__20902;
count__20886_20891 = G__20903;
i__20887_20892 = G__20904;
continue;
} else {
var property__19712__auto___20905 = cljs.core.first(seq__20884_20899__$1);
if(cljs.core.truth_((base__19711__auto___20888[property__19712__auto___20905]))){
(devcards.core.DomComponent.prototype[property__19712__auto___20905] = (base__19711__auto___20888[property__19712__auto___20905]));
} else {
}

var G__20906 = cljs.core.next(seq__20884_20899__$1);
var G__20907 = null;
var G__20908 = (0);
var G__20909 = (0);
seq__20884_20889 = G__20906;
chunk__20885_20890 = G__20907;
count__20886_20891 = G__20908;
i__20887_20892 = G__20909;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__6409__auto__ = x === true;
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = x === false;
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = (x == null);
if(or__6409__auto____$2){
return or__6409__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__6409__auto__ = typeof x === 'string';
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = (x == null);
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__6409__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__20910_SHARP_){
return !(p1__20910_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__20919 = opts;
var map__20919__$1 = ((((!((map__20919 == null)))?((((map__20919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20919):map__20919);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6409__auto__ = cljs.core.map_QMARK_(options);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = (options == null);
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__6409__auto__ = (initial_data == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__6409__auto____$2){
return or__6409__auto____$2;
} else {
var or__6409__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__6409__auto____$3){
return or__6409__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__20919,map__20919__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__20911_SHARP_){
return devcards.core.booler_QMARK_(p1__20911_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__20919,map__20919__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__20942 = "div";
var G__20943 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__20944 = sablono.interpreter.interpret((function (){var G__20947 = "code";
var G__20948 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__20949 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__20947,G__20948,G__20949);
})());
var G__20945 = (function (){var G__20950 = "span";
var G__20951 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__20952 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__20950,G__20951,G__20952);
})();
var G__20946 = (function (){var G__20954 = "span";
var G__20955 = ({"style": ({"flex": "1 100px"})});
var G__20956 = " Received: ";
var G__20957 = (function (){var attrs20953 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs20953))?sablono.interpreter.attributes(attrs20953):null),((cljs.core.map_QMARK_(attrs20953))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20953)], null)));
})();
return React.createElement(G__20954,G__20955,G__20956,G__20957);
})();
return React.createElement(G__20942,G__20943,G__20944,G__20945,G__20946);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__20970 = "div";
var G__20971 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__20972 = (function (){var attrs20969 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20969))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs20969], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs20969))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20969)], null)));
})();
var G__20973 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__20975 = "div";
var G__20976 = null;
var G__20977 = (function (){var attrs20974 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20974))?sablono.interpreter.attributes(attrs20974):null),((cljs.core.map_QMARK_(attrs20974))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20974)], null)));
})();
var G__20978 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs20979 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20979))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs20979], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs20979))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20979)], null)));
})():null));
return React.createElement(G__20975,G__20976,G__20977,G__20978);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__20970,G__20971,G__20972,G__20973);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__20980_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__20980_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__20983 = devcards.core.DevcardBase;
var G__20984 = ({"card": devcards.core.add_environment_defaults(card_options)});
return React.createElement(G__20983,G__20984);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7031__auto____$1,k__7032__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k20986,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__20988 = (((k20986 instanceof cljs.core.Keyword))?k20986.fqn:null);
switch (G__20988) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20986,else__7034__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer(writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7046__auto__,pr_pair__7048__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__7047__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20985){
var self__ = this;
var G__20985__$1 = this;
return (new cljs.core.RecordIter((0),G__20985__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap(this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map(this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7041__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7041__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__20985){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__20989 = cljs.core.keyword_identical_QMARK_;
var expr__20990 = k__7039__auto__;
if(cljs.core.truth_((function (){var G__20992 = cljs.core.cst$kw$obj;
var G__20993 = expr__20990;
return (pred__20989.cljs$core$IFn$_invoke$arity$2 ? pred__20989.cljs$core$IFn$_invoke$arity$2(G__20992,G__20993) : pred__20989.call(null,G__20992,G__20993));
})())){
return (new devcards.core.IdentiyOptions(G__20985,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7039__auto__,G__20985),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__20985){
var self__ = this;
var this__7030__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__20985,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7037__auto__)){
return cljs.core._assoc(this__7036__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write(writer__7066__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__20987){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20987),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20987,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__20995){
var map__20998 = p__20995;
var map__20998__$1 = ((((!((map__20998 == null)))?((((map__20998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20998):map__20998);
var devcard_opts = map__20998__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20998__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__20998,map__20998__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__20998,map__20998__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7031__auto____$1,k__7032__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k21001,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__21003 = (((k21001 instanceof cljs.core.Keyword))?k21001.fqn:null);
switch (G__21003) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21001,else__7034__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer(writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7046__auto__,pr_pair__7048__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__7047__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21000){
var self__ = this;
var G__21000__$1 = this;
return (new cljs.core.RecordIter((0),G__21000__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap(this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map(this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7041__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7041__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__21000){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__21004 = cljs.core.keyword_identical_QMARK_;
var expr__21005 = k__7039__auto__;
if(cljs.core.truth_((function (){var G__21007 = cljs.core.cst$kw$obj;
var G__21008 = expr__21005;
return (pred__21004.cljs$core$IFn$_invoke$arity$2 ? pred__21004.cljs$core$IFn$_invoke$arity$2(G__21007,G__21008) : pred__21004.call(null,G__21007,G__21008));
})())){
return (new devcards.core.AtomLikeOptions(G__21000,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7039__auto__,G__21000),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__21000){
var self__ = this;
var this__7030__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__21000,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7037__auto__)){
return cljs.core._assoc(this__7036__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write(writer__7066__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__21002){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21002),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21002,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7031__auto____$1,k__7032__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k21013,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__21015 = (((k21013 instanceof cljs.core.Keyword))?k21013.fqn:null);
switch (G__21015) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21013,else__7034__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer(writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7046__auto__,pr_pair__7048__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__7047__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21012){
var self__ = this;
var G__21012__$1 = this;
return (new cljs.core.RecordIter((0),G__21012__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap(this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map(this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7041__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7041__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__21012){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__21016 = cljs.core.keyword_identical_QMARK_;
var expr__21017 = k__7039__auto__;
if(cljs.core.truth_((function (){var G__21019 = cljs.core.cst$kw$obj;
var G__21020 = expr__21017;
return (pred__21016.cljs$core$IFn$_invoke$arity$2 ? pred__21016.cljs$core$IFn$_invoke$arity$2(G__21019,G__21020) : pred__21016.call(null,G__21019,G__21020));
})())){
return (new devcards.core.EdnLikeOptions(G__21012,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7039__auto__,G__21012),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__21012){
var self__ = this;
var this__7030__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__21012,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7037__auto__)){
return cljs.core._assoc(this__7036__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write(writer__7066__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__21014){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21014),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21014,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__6397__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__6397__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__6397__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__21033 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__21033 == null))){
if((false) || (G__21033.devcards$core$IDevcard$)){
return true;
} else {
if((!G__21033.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__21033);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__21033);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__21036 = devcards.core.DomComponent;
var G__21037 = ({"node_fn": node_fn, "data_atom": data_atom});
return React.createElement(G__21036,G__21037);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__21041 = (function (){var G__21042 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21042) : cljs.core.deref.call(null,G__21042));
})();
var map__21041__$1 = ((((!((map__21041 == null)))?((((map__21041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21041):map__21041);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21041__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21041__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__21045 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21045) : cljs.core.deref.call(null,G__21045));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__21047 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21047) : cljs.core.deref.call(null,G__21047));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21052 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21052__$1 = ((((!((map__21052 == null)))?((((map__21052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21052):map__21052);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21052__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21052__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21054_21056 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21055_21057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21054_21056,G__21055_21057) : cljs.core.reset_BANG_.call(null,G__21054_21056,G__21055_21057));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21062 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21062__$1 = ((((!((map__21062 == null)))?((((map__21062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21062):map__21062);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21064_21066 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21065_21067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21064_21066,G__21065_21067) : cljs.core.reset_BANG_.call(null,G__21064_21066,G__21065_21067));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21072 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21072__$1 = ((((!((map__21072 == null)))?((((map__21072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21072):map__21072);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21072__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21074_21076 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21075_21077 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21074_21076,G__21075_21077) : cljs.core.reset_BANG_.call(null,G__21074_21076,G__21075_21077));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__21078 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__21079 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21079) : cljs.core.atom.call(null,G__21079));
})()});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__7243__auto__ = (function (){var G__21081 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21081) : cljs.core.deref.call(null,G__21081));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__6397__auto__ = data_atom;
if(cljs.core.truth_(and__6397__auto__)){
return id;
} else {
return and__6397__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__21082){
var map__21083 = p__21082;
var map__21083__$1 = ((((!((map__21083 == null)))?((((map__21083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21083):map__21083);
var ha = map__21083__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__6409__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__21085 = "div";
var G__21086 = ({"style": ({"display": (cljs.core.truth_((function (){var or__6409__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__21087 = (function (){var action = ((function (G__21085,G__21086,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__21085,G__21086,this$))
;
return sablono.interpreter.interpret((function (){var G__21093 = "button";
var G__21094 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__21095 = (function (){var G__21096 = "span";
var G__21097 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__21098 = "";
return React.createElement(G__21096,G__21097,G__21098);
})();
return React.createElement(G__21093,G__21094,G__21095);
})());
})();
var G__21088 = (function (){var action = ((function (G__21085,G__21086,G__21087,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21099 = data_atom;
var G__21100 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21099,G__21100) : cljs.core.reset_BANG_.call(null,G__21099,G__21100));
});})(G__21085,G__21086,G__21087,this$))
;
return sablono.interpreter.interpret((function (){var G__21103 = "button";
var G__21104 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__21105 = (function (){var G__21106 = "span";
var G__21107 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__21108 = "";
return React.createElement(G__21106,G__21107,G__21108);
})();
return React.createElement(G__21103,G__21104,G__21105);
})());
})();
var G__21089 = (function (){var action = ((function (G__21085,G__21086,G__21087,G__21088,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__21085,G__21086,G__21087,G__21088,this$))
;
return sablono.interpreter.interpret((function (){var G__21111 = "button";
var G__21112 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__21113 = (function (){var G__21114 = "span";
var G__21115 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__21116 = "";
return React.createElement(G__21114,G__21115,G__21116);
})();
return React.createElement(G__21111,G__21112,G__21113);
})());
})();
var G__21090 = (function (){var listener = ((function (G__21085,G__21086,G__21087,G__21088,G__21089,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__21085,G__21086,G__21087,G__21088,G__21089,this$))
;
return sablono.interpreter.interpret((function (){var G__21123 = "button";
var G__21124 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__21125 = (function (){var G__21128 = "span";
var G__21129 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__21128,G__21129);
})();
var G__21126 = (function (){var G__21130 = "span";
var G__21131 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__21130,G__21131);
})();
var G__21127 = (function (){var G__21132 = "span";
var G__21133 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return React.createElement(G__21132,G__21133);
})();
return React.createElement(G__21123,G__21124,G__21125,G__21126,G__21127);
})());
})();
return React.createElement(G__21085,G__21086,G__21087,G__21088,G__21089,G__21090);
} else {
return null;
}
})});
return React.createClass(G__21078);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__21136 = devcards.core.HistoryComponent;
var G__21137 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return React.createElement(G__21136,G__21137);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_21139 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_21139;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__7334__auto__ = (function (){var G__21140 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21140) : cljs.core.atom.call(null,G__21140));
})();
var prefer_table__7335__auto__ = (function (){var G__21141 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21141) : cljs.core.atom.call(null,G__21141));
})();
var method_cache__7336__auto__ = (function (){var G__21142 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21142) : cljs.core.atom.call(null,G__21142));
})();
var cached_hierarchy__7337__auto__ = (function (){var G__21143 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21143) : cljs.core.atom.call(null,G__21143));
})();
var hierarchy__7338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs21144 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21144))?sablono.interpreter.attributes(attrs21144):null),((cljs.core.map_QMARK_(attrs21144))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21144)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__21145,body){
var map__21153 = p__21145;
var map__21153__$1 = ((((!((map__21153 == null)))?((((map__21153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21153):map__21153);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21153__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__21156 = "div";
var G__21157 = null;
var G__21158 = (function (){var attrs21155 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21155))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs21155], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs21155))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21155)], null)));
})();
var G__21159 = sablono.interpreter.interpret(body);
return React.createElement(G__21156,G__21157,G__21158,G__21159);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__21160){
var map__21194 = p__21160;
var map__21194__$1 = ((((!((map__21194 == null)))?((((map__21194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21194):map__21194);
var m = map__21194__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21194__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21194__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21194__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs21196 = (function (){var G__21197 = devcards.core.CodeHighlight;
var G__21198 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return React.createElement(G__21197,G__21198);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21196))?sablono.interpreter.attributes(attrs21196):null),((cljs.core.map_QMARK_(attrs21196))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__21201 = "div";
var G__21202 = ({"style": ({"marginTop": "5px"})});
var G__21203 = (function (){var G__21205 = "div";
var G__21206 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__21207 = "\u25B6";
return React.createElement(G__21205,G__21206,G__21207);
})();
var G__21204 = (function (){var G__21208 = "div";
var G__21209 = ({"style": ({"marginLeft": "20px"})});
var G__21210 = sablono.interpreter.interpret((function (){var G__21211 = devcards.core.CodeHighlight;
var G__21212 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__21211,G__21212);
})());
return React.createElement(G__21208,G__21209,G__21210);
})();
return React.createElement(G__21201,G__21202,G__21203,G__21204);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21196),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__21215 = "div";
var G__21216 = ({"style": ({"marginTop": "5px"})});
var G__21217 = (function (){var G__21219 = "div";
var G__21220 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__21221 = "\u25B6";
return React.createElement(G__21219,G__21220,G__21221);
})();
var G__21218 = (function (){var G__21222 = "div";
var G__21223 = ({"style": ({"marginLeft": "20px"})});
var G__21224 = sablono.interpreter.interpret((function (){var G__21225 = devcards.core.CodeHighlight;
var G__21226 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__21225,G__21226);
})());
return React.createElement(G__21222,G__21223,G__21224);
})();
return React.createElement(G__21215,G__21216,G__21217,G__21218);
})():null))], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__21230 = "div";
var G__21231 = null;
var G__21232 = React.createElement("strong",null,"Error: ");
var G__21233 = (function (){var attrs21229 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21229))?sablono.interpreter.attributes(attrs21229):null),((cljs.core.map_QMARK_(attrs21229))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21229)], null)));
})();
return React.createElement(G__21230,G__21231,G__21232,G__21233);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs21234 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21234))?sablono.interpreter.attributes(attrs21234):null),((cljs.core.map_QMARK_(attrs21234))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21234)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__21235){
var map__21236 = p__21235;
var map__21236__$1 = ((((!((map__21236 == null)))?((((map__21236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21236):map__21236);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs21238 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__21236,map__21236__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__21236,map__21236__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__7243__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21238))?sablono.interpreter.attributes(attrs21238):null),((cljs.core.map_QMARK_(attrs21238))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21238)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__21240 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__21240) : cljs.test.report.call(null,G__21240));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs21249 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21250,p__21251){
var map__21252 = p__21250;
var map__21252__$1 = ((((!((map__21252 == null)))?((((map__21252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21252):map__21252);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21252__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21252__$1,cljs.core.cst$kw$html_DASH_list);
var vec__21253 = p__21251;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21253,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21253,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__7243__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21249))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs21249], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs21249))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21249)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__21294){
var map__21295 = p__21294;
var map__21295__$1 = ((((!((map__21295 == null)))?((((map__21295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21295):map__21295);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__21293 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__21293__$1 = ((((!((map__21293 == null)))?((((map__21293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21293):map__21293);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21293__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21293__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21293__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__21298 = "div";
var G__21299 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__21300 = (function (){var G__21302 = "div";
var G__21303 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__21304 = (function (){var G__21308 = "a";
var G__21309 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__21308,G__21302,G__21303,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__21308,G__21302,G__21303,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1))
)});
var G__21310 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__21308,G__21309,G__21310);
})();
var G__21305 = (function (){var G__21311 = "button";
var G__21312 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21311,G__21302,G__21303,G__21304,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(G__21311,G__21302,G__21303,G__21304,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21313 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__21311,G__21312,G__21313);
})();
var G__21306 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__21314 = "button";
var G__21315 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21314,G__21302,G__21303,G__21304,G__21305,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__21314,G__21302,G__21303,G__21304,G__21305,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1){
return (function (p__21317){
var map__21318 = p__21317;
var map__21318__$1 = ((((!((map__21318 == null)))?((((map__21318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21318):map__21318);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__21314,G__21302,G__21303,G__21304,G__21305,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1))
}));
});})(G__21314,G__21302,G__21303,G__21304,G__21305,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21316 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__21314,G__21315,G__21316);
})()));
var G__21307 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__21320 = "button";
var G__21321 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21320,G__21302,G__21303,G__21304,G__21305,G__21306,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__21320,G__21302,G__21303,G__21304,G__21305,G__21306,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1){
return (function (p__21323){
var map__21324 = p__21323;
var map__21324__$1 = ((((!((map__21324 == null)))?((((map__21324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21324):map__21324);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21324__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__21320,G__21302,G__21303,G__21304,G__21305,G__21306,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1))
}));
});})(G__21320,G__21302,G__21303,G__21304,G__21305,G__21306,G__21298,G__21299,error_QMARK_,tests,some_tests,total_tests,map__21293,map__21293__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21322 = sablono.interpreter.interpret(pass);
return React.createElement(G__21320,G__21321,G__21322);
})()));
return React.createElement(G__21302,G__21303,G__21304,G__21305,G__21306,G__21307);
})();
var G__21301 = (function (){var G__21326 = "div";
var G__21327 = ({"className": devcards.system.devcards_rendered_card_class});
var G__21328 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__6409__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__21326,G__21327,G__21328);
})();
return React.createElement(G__21298,G__21299,G__21300,G__21301);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__){
return (function (state_21417){
var state_val_21418 = (state_21417[(1)]);
if((state_val_21418 === (7))){
var state_21417__$1 = state_21417;
var statearr_21419_21468 = state_21417__$1;
(statearr_21419_21468[(2)] = false);

(statearr_21419_21468[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (20))){
var inst_21356 = (state_21417[(7)]);
var inst_21375 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21356);
var state_21417__$1 = state_21417;
var statearr_21420_21469 = state_21417__$1;
(statearr_21420_21469[(2)] = inst_21375);

(statearr_21420_21469[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (27))){
var inst_21380 = (state_21417[(8)]);
var inst_21392 = (state_21417[(9)]);
var inst_21396 = (inst_21380.cljs$core$IFn$_invoke$arity$1 ? inst_21380.cljs$core$IFn$_invoke$arity$1(inst_21392) : inst_21380.call(null,inst_21392));
var state_21417__$1 = state_21417;
var statearr_21421_21470 = state_21417__$1;
(statearr_21421_21470[(2)] = inst_21396);

(statearr_21421_21470[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (1))){
var state_21417__$1 = state_21417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21417__$1,(2),devcards.core.test_channel);
} else {
if((state_val_21418 === (24))){
var state_21417__$1 = state_21417;
var statearr_21422_21471 = state_21417__$1;
(statearr_21422_21471[(2)] = null);

(statearr_21422_21471[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (4))){
var state_21417__$1 = state_21417;
var statearr_21423_21472 = state_21417__$1;
(statearr_21423_21472[(2)] = false);

(statearr_21423_21472[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (15))){
var state_21417__$1 = state_21417;
var statearr_21424_21473 = state_21417__$1;
(statearr_21424_21473[(2)] = false);

(statearr_21424_21473[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (21))){
var inst_21356 = (state_21417[(7)]);
var state_21417__$1 = state_21417;
var statearr_21425_21474 = state_21417__$1;
(statearr_21425_21474[(2)] = inst_21356);

(statearr_21425_21474[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (13))){
var inst_21415 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21417__$1,inst_21415);
} else {
if((state_val_21418 === (22))){
var inst_21379 = (state_21417[(10)]);
var inst_21378 = (state_21417[(2)]);
var inst_21379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21378,cljs.core.cst$kw$tests);
var inst_21380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21378,cljs.core.cst$kw$callback);
var state_21417__$1 = (function (){var statearr_21426 = state_21417;
(statearr_21426[(10)] = inst_21379__$1);

(statearr_21426[(8)] = inst_21380);

return statearr_21426;
})();
if(cljs.core.truth_(inst_21379__$1)){
var statearr_21427_21475 = state_21417__$1;
(statearr_21427_21475[(1)] = (23));

} else {
var statearr_21428_21476 = state_21417__$1;
(statearr_21428_21476[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (29))){
var inst_21406 = (state_21417[(2)]);
var inst_21407 = cljs.test.clear_env_BANG_();
var state_21417__$1 = (function (){var statearr_21429 = state_21417;
(statearr_21429[(11)] = inst_21406);

(statearr_21429[(12)] = inst_21407);

return statearr_21429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21417__$1,(30),devcards.core.test_channel);
} else {
if((state_val_21418 === (6))){
var state_21417__$1 = state_21417;
var statearr_21430_21477 = state_21417__$1;
(statearr_21430_21477[(2)] = true);

(statearr_21430_21477[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (28))){
var inst_21380 = (state_21417[(8)]);
var inst_21398 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_21399 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_21400 = cljs.core.PersistentHashMap.fromArrays(inst_21398,inst_21399);
var inst_21401 = devcards.core.collect_test(inst_21400);
var inst_21402 = cljs.test.get_current_env();
var inst_21403 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_21402,cljs.core.cst$kw$error,"Execution timed out!");
var inst_21404 = (inst_21380.cljs$core$IFn$_invoke$arity$1 ? inst_21380.cljs$core$IFn$_invoke$arity$1(inst_21403) : inst_21380.call(null,inst_21403));
var state_21417__$1 = (function (){var statearr_21431 = state_21417;
(statearr_21431[(13)] = inst_21401);

return statearr_21431;
})();
var statearr_21432_21478 = state_21417__$1;
(statearr_21432_21478[(2)] = inst_21404);

(statearr_21432_21478[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (25))){
var inst_21413 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21433_21479 = state_21417__$1;
(statearr_21433_21479[(2)] = inst_21413);

(statearr_21433_21479[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (17))){
var state_21417__$1 = state_21417;
var statearr_21434_21480 = state_21417__$1;
(statearr_21434_21480[(2)] = true);

(statearr_21434_21480[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (3))){
var inst_21333 = (state_21417[(14)]);
var inst_21338 = inst_21333.cljs$lang$protocol_mask$partition0$;
var inst_21339 = (inst_21338 & (64));
var inst_21340 = inst_21333.cljs$core$ISeq$;
var inst_21341 = (inst_21339) || (inst_21340);
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21341)){
var statearr_21435_21481 = state_21417__$1;
(statearr_21435_21481[(1)] = (6));

} else {
var statearr_21436_21482 = state_21417__$1;
(statearr_21436_21482[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (12))){
var inst_21356 = (state_21417[(7)]);
var inst_21360 = (inst_21356 == null);
var inst_21361 = cljs.core.not(inst_21360);
var state_21417__$1 = state_21417;
if(inst_21361){
var statearr_21437_21483 = state_21417__$1;
(statearr_21437_21483[(1)] = (14));

} else {
var statearr_21438_21484 = state_21417__$1;
(statearr_21438_21484[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (2))){
var inst_21333 = (state_21417[(14)]);
var inst_21333__$1 = (state_21417[(2)]);
var inst_21335 = (inst_21333__$1 == null);
var inst_21336 = cljs.core.not(inst_21335);
var state_21417__$1 = (function (){var statearr_21439 = state_21417;
(statearr_21439[(14)] = inst_21333__$1);

return statearr_21439;
})();
if(inst_21336){
var statearr_21440_21485 = state_21417__$1;
(statearr_21440_21485[(1)] = (3));

} else {
var statearr_21441_21486 = state_21417__$1;
(statearr_21441_21486[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (23))){
var inst_21379 = (state_21417[(10)]);
var inst_21385 = (state_21417[(15)]);
var inst_21385__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_21386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21387 = devcards.core.run_card_tests(inst_21379);
var inst_21388 = [inst_21387,inst_21385__$1];
var inst_21389 = (new cljs.core.PersistentVector(null,2,(5),inst_21386,inst_21388,null));
var state_21417__$1 = (function (){var statearr_21442 = state_21417;
(statearr_21442[(15)] = inst_21385__$1);

return statearr_21442;
})();
return cljs.core.async.ioc_alts_BANG_(state_21417__$1,(26),inst_21389);
} else {
if((state_val_21418 === (19))){
var inst_21370 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21443_21487 = state_21417__$1;
(statearr_21443_21487[(2)] = inst_21370);

(statearr_21443_21487[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (11))){
var inst_21333 = (state_21417[(14)]);
var inst_21353 = (state_21417[(2)]);
var inst_21354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21353,cljs.core.cst$kw$tests);
var inst_21355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21353,cljs.core.cst$kw$callback);
var inst_21356 = inst_21333;
var state_21417__$1 = (function (){var statearr_21444 = state_21417;
(statearr_21444[(16)] = inst_21354);

(statearr_21444[(7)] = inst_21356);

(statearr_21444[(17)] = inst_21355);

return statearr_21444;
})();
var statearr_21445_21488 = state_21417__$1;
(statearr_21445_21488[(2)] = null);

(statearr_21445_21488[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (9))){
var inst_21333 = (state_21417[(14)]);
var inst_21350 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21333);
var state_21417__$1 = state_21417;
var statearr_21446_21489 = state_21417__$1;
(statearr_21446_21489[(2)] = inst_21350);

(statearr_21446_21489[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (5))){
var inst_21348 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21348)){
var statearr_21447_21490 = state_21417__$1;
(statearr_21447_21490[(1)] = (9));

} else {
var statearr_21448_21491 = state_21417__$1;
(statearr_21448_21491[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (14))){
var inst_21356 = (state_21417[(7)]);
var inst_21363 = inst_21356.cljs$lang$protocol_mask$partition0$;
var inst_21364 = (inst_21363 & (64));
var inst_21365 = inst_21356.cljs$core$ISeq$;
var inst_21366 = (inst_21364) || (inst_21365);
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21366)){
var statearr_21449_21492 = state_21417__$1;
(statearr_21449_21492[(1)] = (17));

} else {
var statearr_21450_21493 = state_21417__$1;
(statearr_21450_21493[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (26))){
var inst_21385 = (state_21417[(15)]);
var inst_21391 = (state_21417[(2)]);
var inst_21392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21391,(0),null);
var inst_21393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21391,(1),null);
var inst_21394 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_21393,inst_21385);
var state_21417__$1 = (function (){var statearr_21451 = state_21417;
(statearr_21451[(9)] = inst_21392);

return statearr_21451;
})();
if(inst_21394){
var statearr_21452_21494 = state_21417__$1;
(statearr_21452_21494[(1)] = (27));

} else {
var statearr_21453_21495 = state_21417__$1;
(statearr_21453_21495[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (16))){
var inst_21373 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21373)){
var statearr_21454_21496 = state_21417__$1;
(statearr_21454_21496[(1)] = (20));

} else {
var statearr_21455_21497 = state_21417__$1;
(statearr_21455_21497[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (30))){
var inst_21409 = (state_21417[(2)]);
var inst_21356 = inst_21409;
var state_21417__$1 = (function (){var statearr_21456 = state_21417;
(statearr_21456[(7)] = inst_21356);

return statearr_21456;
})();
var statearr_21457_21498 = state_21417__$1;
(statearr_21457_21498[(2)] = null);

(statearr_21457_21498[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (10))){
var inst_21333 = (state_21417[(14)]);
var state_21417__$1 = state_21417;
var statearr_21458_21499 = state_21417__$1;
(statearr_21458_21499[(2)] = inst_21333);

(statearr_21458_21499[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (18))){
var state_21417__$1 = state_21417;
var statearr_21459_21500 = state_21417__$1;
(statearr_21459_21500[(2)] = false);

(statearr_21459_21500[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21418 === (8))){
var inst_21345 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21460_21501 = state_21417__$1;
(statearr_21460_21501[(2)] = inst_21345);

(statearr_21460_21501[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__15823__auto__))
;
return ((function (switch__15699__auto__,c__15823__auto__){
return (function() {
var devcards$core$state_machine__15700__auto__ = null;
var devcards$core$state_machine__15700__auto____0 = (function (){
var statearr_21464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21464[(0)] = devcards$core$state_machine__15700__auto__);

(statearr_21464[(1)] = (1));

return statearr_21464;
});
var devcards$core$state_machine__15700__auto____1 = (function (state_21417){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_21417);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e21465){if((e21465 instanceof Object)){
var ex__15703__auto__ = e21465;
var statearr_21466_21502 = state_21417;
(statearr_21466_21502[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21417);

return cljs.core.cst$kw$recur;
} else {
throw e21465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__21503 = state_21417;
state_21417 = G__21503;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
devcards$core$state_machine__15700__auto__ = function(state_21417){
switch(arguments.length){
case 0:
return devcards$core$state_machine__15700__auto____0.call(this);
case 1:
return devcards$core$state_machine__15700__auto____1.call(this,state_21417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__15700__auto____0;
devcards$core$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__15700__auto____1;
return devcards$core$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__))
})();
var state__15825__auto__ = (function (){var statearr_21467 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_21467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_21467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__))
);

return c__15823__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__19711__auto___21508 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__19711__auto___21508);
}

var seq__21504_21509 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21505_21510 = null;
var count__21506_21511 = (0);
var i__21507_21512 = (0);
while(true){
if((i__21507_21512 < count__21506_21511)){
var property__19712__auto___21513 = chunk__21505_21510.cljs$core$IIndexed$_nth$arity$2(null,i__21507_21512);
if(cljs.core.truth_((base__19711__auto___21508[property__19712__auto___21513]))){
(devcards.core.TestDevcard.prototype[property__19712__auto___21513] = (base__19711__auto___21508[property__19712__auto___21513]));
} else {
}

var G__21514 = seq__21504_21509;
var G__21515 = chunk__21505_21510;
var G__21516 = count__21506_21511;
var G__21517 = (i__21507_21512 + (1));
seq__21504_21509 = G__21514;
chunk__21505_21510 = G__21515;
count__21506_21511 = G__21516;
i__21507_21512 = G__21517;
continue;
} else {
var temp__4657__auto___21518 = cljs.core.seq(seq__21504_21509);
if(temp__4657__auto___21518){
var seq__21504_21519__$1 = temp__4657__auto___21518;
if(cljs.core.chunked_seq_QMARK_(seq__21504_21519__$1)){
var c__7220__auto___21520 = cljs.core.chunk_first(seq__21504_21519__$1);
var G__21521 = cljs.core.chunk_rest(seq__21504_21519__$1);
var G__21522 = c__7220__auto___21520;
var G__21523 = cljs.core.count(c__7220__auto___21520);
var G__21524 = (0);
seq__21504_21509 = G__21521;
chunk__21505_21510 = G__21522;
count__21506_21511 = G__21523;
i__21507_21512 = G__21524;
continue;
} else {
var property__19712__auto___21525 = cljs.core.first(seq__21504_21519__$1);
if(cljs.core.truth_((base__19711__auto___21508[property__19712__auto___21525]))){
(devcards.core.TestDevcard.prototype[property__19712__auto___21525] = (base__19711__auto___21508[property__19712__auto___21525]));
} else {
}

var G__21526 = cljs.core.next(seq__21504_21519__$1);
var G__21527 = null;
var G__21528 = (0);
var G__21529 = (0);
seq__21504_21509 = G__21526;
chunk__21505_21510 = G__21527;
count__21506_21511 = G__21528;
i__21507_21512 = G__21529;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__7491__auto__ = [];
var len__7484__auto___21536 = arguments.length;
var i__7485__auto___21537 = (0);
while(true){
if((i__7485__auto___21537 < len__7484__auto___21536)){
args__7491__auto__.push((arguments[i__7485__auto___21537]));

var G__21538 = (i__7485__auto___21537 + (1));
i__7485__auto___21537 = G__21538;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core21531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core21531 = (function (test_thunks,meta21532){
this.test_thunks = test_thunks;
this.meta21532 = meta21532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core21531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21533,meta21532__$1){
var self__ = this;
var _21533__$1 = this;
return (new devcards.core.t_devcards$core21531(self__.test_thunks,meta21532__$1));
});

devcards.core.t_devcards$core21531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21533){
var self__ = this;
var _21533__$1 = this;
return self__.meta21532;
});

devcards.core.t_devcards$core21531.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core21531.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__21534 = devcards.core.TestDevcard;
var G__21535 = ({"test_thunks": self__.test_thunks, "path": path});
return React.createElement(G__21534,G__21535);
});

devcards.core.t_devcards$core21531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta21532], null);
});

devcards.core.t_devcards$core21531.cljs$lang$type = true;

devcards.core.t_devcards$core21531.cljs$lang$ctorStr = "devcards.core/t_devcards$core21531";

devcards.core.t_devcards$core21531.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"devcards.core/t_devcards$core21531");
});

devcards.core.__GT_t_devcards$core21531 = (function devcards$core$__GT_t_devcards$core21531(test_thunks__$1,meta21532){
return (new devcards.core.t_devcards$core21531(test_thunks__$1,meta21532));
});

}

return (new devcards.core.t_devcards$core21531(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq21530){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21530));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__21541 = (function (){var attrs21542 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21542))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21542], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs21542))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21542)], null)));
})();
return React.renderToString(G__21541);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
var G__21546 = (function (){var attrs21548 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21548))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21548], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs21548))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21548)], null)));
})();
var G__21547 = devcards.system.devcards_app_node();
return React.render(G__21546,G__21547);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__){
return (function (state_21578){
var state_val_21579 = (state_21578[(1)]);
if((state_val_21579 === (1))){
var inst_21569 = devcards.core.load_data_from_channel_BANG_();
var state_21578__$1 = state_21578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21578__$1,(2),inst_21569);
} else {
if((state_val_21579 === (2))){
var inst_21571 = (state_21578[(2)]);
var inst_21572 = cljs.core.async.timeout((100));
var state_21578__$1 = (function (){var statearr_21580 = state_21578;
(statearr_21580[(7)] = inst_21571);

return statearr_21580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21578__$1,(3),inst_21572);
} else {
if((state_val_21579 === (3))){
var inst_21574 = (state_21578[(2)]);
var inst_21575 = (function (){return ((function (inst_21574,state_val_21579,c__15823__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_21574,state_val_21579,c__15823__auto__))
})();
var inst_21576 = setTimeout(inst_21575,(0));
var state_21578__$1 = (function (){var statearr_21581 = state_21578;
(statearr_21581[(8)] = inst_21574);

return statearr_21581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21578__$1,inst_21576);
} else {
return null;
}
}
}
});})(c__15823__auto__))
;
return ((function (switch__15699__auto__,c__15823__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__15700__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__15700__auto____0 = (function (){
var statearr_21585 = [null,null,null,null,null,null,null,null,null];
(statearr_21585[(0)] = devcards$core$mount_namespace_$_state_machine__15700__auto__);

(statearr_21585[(1)] = (1));

return statearr_21585;
});
var devcards$core$mount_namespace_$_state_machine__15700__auto____1 = (function (state_21578){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_21578);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e21586){if((e21586 instanceof Object)){
var ex__15703__auto__ = e21586;
var statearr_21587_21589 = state_21578;
(statearr_21587_21589[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21578);

return cljs.core.cst$kw$recur;
} else {
throw e21586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__21590 = state_21578;
state_21578 = G__21590;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__15700__auto__ = function(state_21578){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__15700__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__15700__auto____1.call(this,state_21578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__15700__auto____0;
devcards$core$mount_namespace_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__15700__auto____1;
return devcards$core$mount_namespace_$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__))
})();
var state__15825__auto__ = (function (){var statearr_21588 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_21588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_21588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__))
);

return c__15823__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
