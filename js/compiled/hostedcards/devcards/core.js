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
document.body.addEventListener("figwheel.js-reload",(function (p1__20552_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__20552_SHARP_.detail], null));
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
var args20553 = [];
var len__7484__auto___20556 = arguments.length;
var i__7485__auto___20557 = (0);
while(true){
if((i__7485__auto___20557 < len__7484__auto___20556)){
args20553.push((arguments[i__7485__auto___20557]));

var G__20558 = (i__7485__auto___20557 + (1));
i__7485__auto___20557 = G__20558;
continue;
} else {
}
break;
}

var G__20555 = args20553.length;
switch (G__20555) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20553.length)].join('')));

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
var map__20566 = c;
var map__20566__$1 = ((((!((map__20566 == null)))?((((map__20566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20566):map__20566);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20566__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20566__$1,cljs.core.cst$kw$func);
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
var base__19573__auto___20586 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__20568 = "pre";
var G__20569 = ({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__20571 = this$;
var G__20572 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20571,G__20572) : devcards.core.get_props.call(null,G__20571,G__20572));
})())});
var G__20570 = (function (){var G__20573 = "code";
var G__20574 = ({"className": (function (){var or__6409__auto__ = (function (){var G__20578 = this$;
var G__20579 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20578,G__20579) : devcards.core.get_props.call(null,G__20578,G__20579));
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__20575 = sablono.interpreter.interpret((function (){var G__20580 = this$;
var G__20581 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__20580,G__20581) : devcards.core.get_props.call(null,G__20580,G__20581));
})());
return React.createElement(G__20573,G__20574,G__20575);
})();
return React.createElement(G__20568,G__20569,G__20570);
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__19573__auto___20586);
}

var seq__20582_20587 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20583_20588 = null;
var count__20584_20589 = (0);
var i__20585_20590 = (0);
while(true){
if((i__20585_20590 < count__20584_20589)){
var property__19574__auto___20591 = chunk__20583_20588.cljs$core$IIndexed$_nth$arity$2(null,i__20585_20590);
if(cljs.core.truth_((base__19573__auto___20586[property__19574__auto___20591]))){
(devcards.core.CodeHighlight.prototype[property__19574__auto___20591] = (base__19573__auto___20586[property__19574__auto___20591]));
} else {
}

var G__20592 = seq__20582_20587;
var G__20593 = chunk__20583_20588;
var G__20594 = count__20584_20589;
var G__20595 = (i__20585_20590 + (1));
seq__20582_20587 = G__20592;
chunk__20583_20588 = G__20593;
count__20584_20589 = G__20594;
i__20585_20590 = G__20595;
continue;
} else {
var temp__4657__auto___20596 = cljs.core.seq(seq__20582_20587);
if(temp__4657__auto___20596){
var seq__20582_20597__$1 = temp__4657__auto___20596;
if(cljs.core.chunked_seq_QMARK_(seq__20582_20597__$1)){
var c__7220__auto___20598 = cljs.core.chunk_first(seq__20582_20597__$1);
var G__20599 = cljs.core.chunk_rest(seq__20582_20597__$1);
var G__20600 = c__7220__auto___20598;
var G__20601 = cljs.core.count(c__7220__auto___20598);
var G__20602 = (0);
seq__20582_20587 = G__20599;
chunk__20583_20588 = G__20600;
count__20584_20589 = G__20601;
i__20585_20590 = G__20602;
continue;
} else {
var property__19574__auto___20603 = cljs.core.first(seq__20582_20597__$1);
if(cljs.core.truth_((base__19573__auto___20586[property__19574__auto___20603]))){
(devcards.core.CodeHighlight.prototype[property__19574__auto___20603] = (base__19573__auto___20586[property__19574__auto___20603]));
} else {
}

var G__20604 = cljs.core.next(seq__20582_20597__$1);
var G__20605 = null;
var G__20606 = (0);
var G__20607 = (0);
seq__20582_20587 = G__20604;
chunk__20583_20588 = G__20605;
count__20584_20589 = G__20606;
i__20585_20590 = G__20607;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__20610 = devcards.core.CodeHighlight;
var G__20611 = ({"code": code_str, "lang": lang});
return React.createElement(G__20610,G__20611);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__7334__auto__ = (function (){var G__20612 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20612) : cljs.core.atom.call(null,G__20612));
})();
var prefer_table__7335__auto__ = (function (){var G__20613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20613) : cljs.core.atom.call(null,G__20613));
})();
var method_cache__7336__auto__ = (function (){var G__20614 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20614) : cljs.core.atom.call(null,G__20614));
})();
var cached_hierarchy__7337__auto__ = (function (){var G__20615 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20615) : cljs.core.atom.call(null,G__20615));
})();
var hierarchy__7338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__20616){
var map__20617 = p__20616;
var map__20617__$1 = ((((!((map__20617 == null)))?((((map__20617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20617):map__20617);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__20619){
var map__20620 = p__20619;
var map__20620__$1 = ((((!((map__20620 == null)))?((((map__20620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20620):map__20620);
var block = map__20620__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20620__$1,cljs.core.cst$kw$content);
var G__20622 = devcards.core.CodeHighlight;
var G__20623 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return React.createElement(G__20622,G__20623);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__7491__auto__ = [];
var len__7484__auto___20634 = arguments.length;
var i__7485__auto___20635 = (0);
while(true){
if((i__7485__auto___20635 < len__7484__auto___20634)){
args__7491__auto__.push((arguments[i__7485__auto___20635]));

var G__20636 = (i__7485__auto___20635 + (1));
i__7485__auto___20635 = G__20636;
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
var G__20625 = "div";
var G__20626 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__20627 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__20625,G__20626,blocks,strs__$1){
return (function (i,data){
var G__20628 = "div";
var G__20629 = ({"key": i});
var G__20630 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__20628,G__20629,G__20630);
});})(G__20625,G__20626,blocks,strs__$1))
,blocks));
return React.createElement(G__20625,G__20626,G__20627);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__20631 = "div";
var G__20632 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__20633 = sablono.interpreter.interpret(message);
return React.createElement(G__20631,G__20632,G__20633);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq20624){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20624));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__20641 = "div";
var G__20642 = ({"key": "devcards_naked-card", "className": (function (){var G__20644 = devcards.system.devcards_rendered_card_class;
var G__20644__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__20644),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__20644);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str(G__20644__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__20644__$1;
}
})()});
var G__20643 = sablono.interpreter.interpret(children);
return React.createElement(G__20641,G__20642,G__20643);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args20645 = [];
var len__7484__auto___20667 = arguments.length;
var i__7485__auto___20668 = (0);
while(true){
if((i__7485__auto___20668 < len__7484__auto___20667)){
args20645.push((arguments[i__7485__auto___20668]));

var G__20669 = (i__7485__auto___20668 + (1));
i__7485__auto___20668 = G__20669;
continue;
} else {
}
break;
}

var G__20647 = args20645.length;
switch (G__20647) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20645.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__20648 = card;
var map__20648__$1 = ((((!((map__20648 == null)))?((((map__20648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20648):map__20648);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20648__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20648__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__20650 = "div";
var G__20651 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))});
var G__20652 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20650,G__20651,G__20652);
} else {
var G__20653 = "div";
var G__20654 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__20655 = (function (){var G__20657 = "div";
var G__20658 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__20659 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__20660 = "a";
var G__20661 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__20660,G__20657,G__20658,G__20653,G__20654,map__20648,map__20648__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__20660,G__20657,G__20658,G__20653,G__20654,map__20648,map__20648__$1,path,options))
)});
var G__20662 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__20663 = " ";
return React.createElement(G__20660,G__20661,G__20662,G__20663);
})()):sablono.interpreter.interpret((function (){var attrs20664 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs20664))?sablono.interpreter.attributes(attrs20664):null),((cljs.core.map_QMARK_(attrs20664))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20664)], null)));
})()));
return React.createElement(G__20657,G__20658,G__20659);
})();
var G__20656 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20653,G__20654,G__20655,G__20656);
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
var base__19573__auto___20676 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs20671 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20671))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs20671], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs20671))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20671)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__19573__auto___20676);
}

var seq__20672_20677 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20673_20678 = null;
var count__20674_20679 = (0);
var i__20675_20680 = (0);
while(true){
if((i__20675_20680 < count__20674_20679)){
var property__19574__auto___20681 = chunk__20673_20678.cljs$core$IIndexed$_nth$arity$2(null,i__20675_20680);
if(cljs.core.truth_((base__19573__auto___20676[property__19574__auto___20681]))){
(devcards.core.DontUpdate.prototype[property__19574__auto___20681] = (base__19573__auto___20676[property__19574__auto___20681]));
} else {
}

var G__20682 = seq__20672_20677;
var G__20683 = chunk__20673_20678;
var G__20684 = count__20674_20679;
var G__20685 = (i__20675_20680 + (1));
seq__20672_20677 = G__20682;
chunk__20673_20678 = G__20683;
count__20674_20679 = G__20684;
i__20675_20680 = G__20685;
continue;
} else {
var temp__4657__auto___20686 = cljs.core.seq(seq__20672_20677);
if(temp__4657__auto___20686){
var seq__20672_20687__$1 = temp__4657__auto___20686;
if(cljs.core.chunked_seq_QMARK_(seq__20672_20687__$1)){
var c__7220__auto___20688 = cljs.core.chunk_first(seq__20672_20687__$1);
var G__20689 = cljs.core.chunk_rest(seq__20672_20687__$1);
var G__20690 = c__7220__auto___20688;
var G__20691 = cljs.core.count(c__7220__auto___20688);
var G__20692 = (0);
seq__20672_20677 = G__20689;
chunk__20673_20678 = G__20690;
count__20674_20679 = G__20691;
i__20675_20680 = G__20692;
continue;
} else {
var property__19574__auto___20693 = cljs.core.first(seq__20672_20687__$1);
if(cljs.core.truth_((base__19573__auto___20676[property__19574__auto___20693]))){
(devcards.core.DontUpdate.prototype[property__19574__auto___20693] = (base__19573__auto___20676[property__19574__auto___20693]));
} else {
}

var G__20694 = cljs.core.next(seq__20672_20687__$1);
var G__20695 = null;
var G__20696 = (0);
var G__20697 = (0);
seq__20672_20677 = G__20694;
chunk__20673_20678 = G__20695;
count__20674_20679 = G__20696;
i__20675_20680 = G__20697;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__20700 = devcards.core.DontUpdate;
var G__20701 = ({"change_count": change_count, "children_thunk": children_thunk});
return React.createElement(G__20700,G__20701);
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
var main__$1 = (function (){var G__20710 = "div";
var G__20711 = ({"key": "devcards-main-section"});
var G__20712 = sablono.interpreter.interpret(main);
return React.createElement(G__20710,G__20711,G__20712);
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
var G__20713 = "div";
var G__20714 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__20715 = sablono.interpreter.interpret(children);
return React.createElement(G__20713,G__20714,G__20715);
}
});
var base__19573__auto___20720 = ({"getInitialState": (function (){
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
devcards.core.DevcardBase = React.createClass(base__19573__auto___20720);
}

var seq__20716_20721 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20717_20722 = null;
var count__20718_20723 = (0);
var i__20719_20724 = (0);
while(true){
if((i__20719_20724 < count__20718_20723)){
var property__19574__auto___20725 = chunk__20717_20722.cljs$core$IIndexed$_nth$arity$2(null,i__20719_20724);
if(cljs.core.truth_((base__19573__auto___20720[property__19574__auto___20725]))){
(devcards.core.DevcardBase.prototype[property__19574__auto___20725] = (base__19573__auto___20720[property__19574__auto___20725]));
} else {
}

var G__20726 = seq__20716_20721;
var G__20727 = chunk__20717_20722;
var G__20728 = count__20718_20723;
var G__20729 = (i__20719_20724 + (1));
seq__20716_20721 = G__20726;
chunk__20717_20722 = G__20727;
count__20718_20723 = G__20728;
i__20719_20724 = G__20729;
continue;
} else {
var temp__4657__auto___20730 = cljs.core.seq(seq__20716_20721);
if(temp__4657__auto___20730){
var seq__20716_20731__$1 = temp__4657__auto___20730;
if(cljs.core.chunked_seq_QMARK_(seq__20716_20731__$1)){
var c__7220__auto___20732 = cljs.core.chunk_first(seq__20716_20731__$1);
var G__20733 = cljs.core.chunk_rest(seq__20716_20731__$1);
var G__20734 = c__7220__auto___20732;
var G__20735 = cljs.core.count(c__7220__auto___20732);
var G__20736 = (0);
seq__20716_20721 = G__20733;
chunk__20717_20722 = G__20734;
count__20718_20723 = G__20735;
i__20719_20724 = G__20736;
continue;
} else {
var property__19574__auto___20737 = cljs.core.first(seq__20716_20731__$1);
if(cljs.core.truth_((base__19573__auto___20720[property__19574__auto___20737]))){
(devcards.core.DevcardBase.prototype[property__19574__auto___20737] = (base__19573__auto___20720[property__19574__auto___20737]));
} else {
}

var G__20738 = cljs.core.next(seq__20716_20731__$1);
var G__20739 = null;
var G__20740 = (0);
var G__20741 = (0);
seq__20716_20721 = G__20738;
chunk__20717_20722 = G__20739;
count__20718_20723 = G__20740;
i__20719_20724 = G__20741;
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
var G__20742 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20743 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__20742,G__20743) : node_fn.call(null,G__20742,G__20743));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__19573__auto___20750 = ({"getInitialState": (function (){
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
var G__20744 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__20745 = "Card has not mounted DOM node.";
return React.DOM.div(G__20744,G__20745);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__19573__auto___20750);
}

var seq__20746_20751 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20747_20752 = null;
var count__20748_20753 = (0);
var i__20749_20754 = (0);
while(true){
if((i__20749_20754 < count__20748_20753)){
var property__19574__auto___20755 = chunk__20747_20752.cljs$core$IIndexed$_nth$arity$2(null,i__20749_20754);
if(cljs.core.truth_((base__19573__auto___20750[property__19574__auto___20755]))){
(devcards.core.DomComponent.prototype[property__19574__auto___20755] = (base__19573__auto___20750[property__19574__auto___20755]));
} else {
}

var G__20756 = seq__20746_20751;
var G__20757 = chunk__20747_20752;
var G__20758 = count__20748_20753;
var G__20759 = (i__20749_20754 + (1));
seq__20746_20751 = G__20756;
chunk__20747_20752 = G__20757;
count__20748_20753 = G__20758;
i__20749_20754 = G__20759;
continue;
} else {
var temp__4657__auto___20760 = cljs.core.seq(seq__20746_20751);
if(temp__4657__auto___20760){
var seq__20746_20761__$1 = temp__4657__auto___20760;
if(cljs.core.chunked_seq_QMARK_(seq__20746_20761__$1)){
var c__7220__auto___20762 = cljs.core.chunk_first(seq__20746_20761__$1);
var G__20763 = cljs.core.chunk_rest(seq__20746_20761__$1);
var G__20764 = c__7220__auto___20762;
var G__20765 = cljs.core.count(c__7220__auto___20762);
var G__20766 = (0);
seq__20746_20751 = G__20763;
chunk__20747_20752 = G__20764;
count__20748_20753 = G__20765;
i__20749_20754 = G__20766;
continue;
} else {
var property__19574__auto___20767 = cljs.core.first(seq__20746_20761__$1);
if(cljs.core.truth_((base__19573__auto___20750[property__19574__auto___20767]))){
(devcards.core.DomComponent.prototype[property__19574__auto___20767] = (base__19573__auto___20750[property__19574__auto___20767]));
} else {
}

var G__20768 = cljs.core.next(seq__20746_20761__$1);
var G__20769 = null;
var G__20770 = (0);
var G__20771 = (0);
seq__20746_20751 = G__20768;
chunk__20747_20752 = G__20769;
count__20748_20753 = G__20770;
i__20749_20754 = G__20771;
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
return (function (p1__20772_SHARP_){
return !(p1__20772_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__20781 = opts;
var map__20781__$1 = ((((!((map__20781 == null)))?((((map__20781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20781):map__20781);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,cljs.core.cst$kw$options);
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
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__20781,map__20781__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__20773_SHARP_){
return devcards.core.booler_QMARK_(p1__20773_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__20781,map__20781__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__20804 = "div";
var G__20805 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__20806 = sablono.interpreter.interpret((function (){var G__20809 = "code";
var G__20810 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__20811 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__20809,G__20810,G__20811);
})());
var G__20807 = (function (){var G__20812 = "span";
var G__20813 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__20814 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__20812,G__20813,G__20814);
})();
var G__20808 = (function (){var G__20816 = "span";
var G__20817 = ({"style": ({"flex": "1 100px"})});
var G__20818 = " Received: ";
var G__20819 = (function (){var attrs20815 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs20815))?sablono.interpreter.attributes(attrs20815):null),((cljs.core.map_QMARK_(attrs20815))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20815)], null)));
})();
return React.createElement(G__20816,G__20817,G__20818,G__20819);
})();
return React.createElement(G__20804,G__20805,G__20806,G__20807,G__20808);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__20832 = "div";
var G__20833 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__20834 = (function (){var attrs20831 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20831))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs20831], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs20831))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20831)], null)));
})();
var G__20835 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__20837 = "div";
var G__20838 = null;
var G__20839 = (function (){var attrs20836 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20836))?sablono.interpreter.attributes(attrs20836):null),((cljs.core.map_QMARK_(attrs20836))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20836)], null)));
})();
var G__20840 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs20841 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20841))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs20841], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs20841))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20841)], null)));
})():null));
return React.createElement(G__20837,G__20838,G__20839,G__20840);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__20832,G__20833,G__20834,G__20835);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__20842_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__20842_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__20845 = devcards.core.DevcardBase;
var G__20846 = ({"card": devcards.core.add_environment_defaults(card_options)});
return React.createElement(G__20845,G__20846);
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

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k20848,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__20850 = (((k20848 instanceof cljs.core.Keyword))?k20848.fqn:null);
switch (G__20850) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20848,else__7034__auto__);

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

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20847){
var self__ = this;
var G__20847__$1 = this;
return (new cljs.core.RecordIter((0),G__20847__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__20847){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__20851 = cljs.core.keyword_identical_QMARK_;
var expr__20852 = k__7039__auto__;
if(cljs.core.truth_((function (){var G__20854 = cljs.core.cst$kw$obj;
var G__20855 = expr__20852;
return (pred__20851.cljs$core$IFn$_invoke$arity$2 ? pred__20851.cljs$core$IFn$_invoke$arity$2(G__20854,G__20855) : pred__20851.call(null,G__20854,G__20855));
})())){
return (new devcards.core.IdentiyOptions(G__20847,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7039__auto__,G__20847),null));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__20847){
var self__ = this;
var this__7030__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__20847,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__20849){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20849),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20849,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__20857){
var map__20860 = p__20857;
var map__20860__$1 = ((((!((map__20860 == null)))?((((map__20860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20860):map__20860);
var devcard_opts = map__20860__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20860__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__20860,map__20860__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__20860,map__20860__$1,devcard_opts,options))
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

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k20863,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__20865 = (((k20863 instanceof cljs.core.Keyword))?k20863.fqn:null);
switch (G__20865) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20863,else__7034__auto__);

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

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20862){
var self__ = this;
var G__20862__$1 = this;
return (new cljs.core.RecordIter((0),G__20862__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__20862){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__20866 = cljs.core.keyword_identical_QMARK_;
var expr__20867 = k__7039__auto__;
if(cljs.core.truth_((function (){var G__20869 = cljs.core.cst$kw$obj;
var G__20870 = expr__20867;
return (pred__20866.cljs$core$IFn$_invoke$arity$2 ? pred__20866.cljs$core$IFn$_invoke$arity$2(G__20869,G__20870) : pred__20866.call(null,G__20869,G__20870));
})())){
return (new devcards.core.AtomLikeOptions(G__20862,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7039__auto__,G__20862),null));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__20862){
var self__ = this;
var this__7030__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__20862,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__20864){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20864),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20864,cljs.core.cst$kw$obj),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k20875,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__20877 = (((k20875 instanceof cljs.core.Keyword))?k20875.fqn:null);
switch (G__20877) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20875,else__7034__auto__);

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

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20874){
var self__ = this;
var G__20874__$1 = this;
return (new cljs.core.RecordIter((0),G__20874__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__20874){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__20878 = cljs.core.keyword_identical_QMARK_;
var expr__20879 = k__7039__auto__;
if(cljs.core.truth_((function (){var G__20881 = cljs.core.cst$kw$obj;
var G__20882 = expr__20879;
return (pred__20878.cljs$core$IFn$_invoke$arity$2 ? pred__20878.cljs$core$IFn$_invoke$arity$2(G__20881,G__20882) : pred__20878.call(null,G__20881,G__20882));
})())){
return (new devcards.core.EdnLikeOptions(G__20874,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7039__auto__,G__20874),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__20874){
var self__ = this;
var this__7030__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__20874,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__20876){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20876),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20876,cljs.core.cst$kw$obj),null));
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
if((function (){var G__20895 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__20895 == null))){
if((false) || (G__20895.devcards$core$IDevcard$)){
return true;
} else {
if((!G__20895.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20895);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20895);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__20898 = devcards.core.DomComponent;
var G__20899 = ({"node_fn": node_fn, "data_atom": data_atom});
return React.createElement(G__20898,G__20899);
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
var map__20903 = (function (){var G__20904 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20904) : cljs.core.deref.call(null,G__20904));
})();
var map__20903__$1 = ((((!((map__20903 == null)))?((((map__20903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20903):map__20903);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20907 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20907) : cljs.core.deref.call(null,G__20907));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20909 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20909) : cljs.core.deref.call(null,G__20909));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20914 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20914__$1 = ((((!((map__20914 == null)))?((((map__20914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20914):map__20914);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20916_20918 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20917_20919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20916_20918,G__20917_20919) : cljs.core.reset_BANG_.call(null,G__20916_20918,G__20917_20919));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20924 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20924__$1 = ((((!((map__20924 == null)))?((((map__20924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20924):map__20924);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20924__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20924__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20926_20928 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20927_20929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20926_20928,G__20927_20929) : cljs.core.reset_BANG_.call(null,G__20926_20928,G__20927_20929));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20934 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20934__$1 = ((((!((map__20934 == null)))?((((map__20934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20934):map__20934);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20934__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20936_20938 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20937_20939 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20936_20938,G__20937_20939) : cljs.core.reset_BANG_.call(null,G__20936_20938,G__20937_20939));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__20940 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__20941 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20941) : cljs.core.atom.call(null,G__20941));
})()});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__7243__auto__ = (function (){var G__20943 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20943) : cljs.core.deref.call(null,G__20943));
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
return (function (p__20944){
var map__20945 = p__20944;
var map__20945__$1 = ((((!((map__20945 == null)))?((((map__20945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20945):map__20945);
var ha = map__20945__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$ignore_DASH_click);
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
var G__20947 = "div";
var G__20948 = ({"style": ({"display": (cljs.core.truth_((function (){var or__6409__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__20949 = (function (){var action = ((function (G__20947,G__20948,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__20947,G__20948,this$))
;
return sablono.interpreter.interpret((function (){var G__20955 = "button";
var G__20956 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__20957 = (function (){var G__20958 = "span";
var G__20959 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__20960 = "";
return React.createElement(G__20958,G__20959,G__20960);
})();
return React.createElement(G__20955,G__20956,G__20957);
})());
})();
var G__20950 = (function (){var action = ((function (G__20947,G__20948,G__20949,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20961 = data_atom;
var G__20962 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20961,G__20962) : cljs.core.reset_BANG_.call(null,G__20961,G__20962));
});})(G__20947,G__20948,G__20949,this$))
;
return sablono.interpreter.interpret((function (){var G__20965 = "button";
var G__20966 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__20967 = (function (){var G__20968 = "span";
var G__20969 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__20970 = "";
return React.createElement(G__20968,G__20969,G__20970);
})();
return React.createElement(G__20965,G__20966,G__20967);
})());
})();
var G__20951 = (function (){var action = ((function (G__20947,G__20948,G__20949,G__20950,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__20947,G__20948,G__20949,G__20950,this$))
;
return sablono.interpreter.interpret((function (){var G__20973 = "button";
var G__20974 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__20975 = (function (){var G__20976 = "span";
var G__20977 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__20978 = "";
return React.createElement(G__20976,G__20977,G__20978);
})();
return React.createElement(G__20973,G__20974,G__20975);
})());
})();
var G__20952 = (function (){var listener = ((function (G__20947,G__20948,G__20949,G__20950,G__20951,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__20947,G__20948,G__20949,G__20950,G__20951,this$))
;
return sablono.interpreter.interpret((function (){var G__20985 = "button";
var G__20986 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__20987 = (function (){var G__20990 = "span";
var G__20991 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__20990,G__20991);
})();
var G__20988 = (function (){var G__20992 = "span";
var G__20993 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__20992,G__20993);
})();
var G__20989 = (function (){var G__20994 = "span";
var G__20995 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return React.createElement(G__20994,G__20995);
})();
return React.createElement(G__20985,G__20986,G__20987,G__20988,G__20989);
})());
})();
return React.createElement(G__20947,G__20948,G__20949,G__20950,G__20951,G__20952);
} else {
return null;
}
})});
return React.createClass(G__20940);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__20998 = devcards.core.HistoryComponent;
var G__20999 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return React.createElement(G__20998,G__20999);
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
var _STAR_current_env_STAR_21001 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_21001;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__7334__auto__ = (function (){var G__21002 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21002) : cljs.core.atom.call(null,G__21002));
})();
var prefer_table__7335__auto__ = (function (){var G__21003 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21003) : cljs.core.atom.call(null,G__21003));
})();
var method_cache__7336__auto__ = (function (){var G__21004 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21004) : cljs.core.atom.call(null,G__21004));
})();
var cached_hierarchy__7337__auto__ = (function (){var G__21005 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21005) : cljs.core.atom.call(null,G__21005));
})();
var hierarchy__7338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs21006 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21006))?sablono.interpreter.attributes(attrs21006):null),((cljs.core.map_QMARK_(attrs21006))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21006)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__21007,body){
var map__21015 = p__21007;
var map__21015__$1 = ((((!((map__21015 == null)))?((((map__21015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21015):map__21015);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__21018 = "div";
var G__21019 = null;
var G__21020 = (function (){var attrs21017 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21017))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs21017], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs21017))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21017)], null)));
})();
var G__21021 = sablono.interpreter.interpret(body);
return React.createElement(G__21018,G__21019,G__21020,G__21021);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__21022){
var map__21056 = p__21022;
var map__21056__$1 = ((((!((map__21056 == null)))?((((map__21056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21056):map__21056);
var m = map__21056__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs21058 = (function (){var G__21059 = devcards.core.CodeHighlight;
var G__21060 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return React.createElement(G__21059,G__21060);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21058))?sablono.interpreter.attributes(attrs21058):null),((cljs.core.map_QMARK_(attrs21058))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__21063 = "div";
var G__21064 = ({"style": ({"marginTop": "5px"})});
var G__21065 = (function (){var G__21067 = "div";
var G__21068 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__21069 = "\u25B6";
return React.createElement(G__21067,G__21068,G__21069);
})();
var G__21066 = (function (){var G__21070 = "div";
var G__21071 = ({"style": ({"marginLeft": "20px"})});
var G__21072 = sablono.interpreter.interpret((function (){var G__21073 = devcards.core.CodeHighlight;
var G__21074 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__21073,G__21074);
})());
return React.createElement(G__21070,G__21071,G__21072);
})();
return React.createElement(G__21063,G__21064,G__21065,G__21066);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21058),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__21077 = "div";
var G__21078 = ({"style": ({"marginTop": "5px"})});
var G__21079 = (function (){var G__21081 = "div";
var G__21082 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__21083 = "\u25B6";
return React.createElement(G__21081,G__21082,G__21083);
})();
var G__21080 = (function (){var G__21084 = "div";
var G__21085 = ({"style": ({"marginLeft": "20px"})});
var G__21086 = sablono.interpreter.interpret((function (){var G__21087 = devcards.core.CodeHighlight;
var G__21088 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__21087,G__21088);
})());
return React.createElement(G__21084,G__21085,G__21086);
})();
return React.createElement(G__21077,G__21078,G__21079,G__21080);
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
return devcards.core.display_message(m,(function (){var G__21092 = "div";
var G__21093 = null;
var G__21094 = React.createElement("strong",null,"Error: ");
var G__21095 = (function (){var attrs21091 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21091))?sablono.interpreter.attributes(attrs21091):null),((cljs.core.map_QMARK_(attrs21091))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21091)], null)));
})();
return React.createElement(G__21092,G__21093,G__21094,G__21095);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs21096 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21096))?sablono.interpreter.attributes(attrs21096):null),((cljs.core.map_QMARK_(attrs21096))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21096)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__21097){
var map__21098 = p__21097;
var map__21098__$1 = ((((!((map__21098 == null)))?((((map__21098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21098):map__21098);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21098__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs21100 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__21098,map__21098__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__21098,map__21098__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__7243__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21100))?sablono.interpreter.attributes(attrs21100):null),((cljs.core.map_QMARK_(attrs21100))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21100)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__21102 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__21102) : cljs.test.report.call(null,G__21102));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs21111 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21112,p__21113){
var map__21114 = p__21112;
var map__21114__$1 = ((((!((map__21114 == null)))?((((map__21114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21114):map__21114);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,cljs.core.cst$kw$html_DASH_list);
var vec__21115 = p__21113;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21115,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21115,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__7243__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21111))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs21111], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs21111))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21111)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__21156){
var map__21157 = p__21156;
var map__21157__$1 = ((((!((map__21157 == null)))?((((map__21157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21157):map__21157);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__21155 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__21155__$1 = ((((!((map__21155 == null)))?((((map__21155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21155):map__21155);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__21160 = "div";
var G__21161 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__21162 = (function (){var G__21164 = "div";
var G__21165 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__21166 = (function (){var G__21170 = "a";
var G__21171 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__21170,G__21164,G__21165,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__21170,G__21164,G__21165,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1))
)});
var G__21172 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__21170,G__21171,G__21172);
})();
var G__21167 = (function (){var G__21173 = "button";
var G__21174 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21173,G__21164,G__21165,G__21166,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(G__21173,G__21164,G__21165,G__21166,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21175 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__21173,G__21174,G__21175);
})();
var G__21168 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__21176 = "button";
var G__21177 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21176,G__21164,G__21165,G__21166,G__21167,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__21176,G__21164,G__21165,G__21166,G__21167,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1){
return (function (p__21179){
var map__21180 = p__21179;
var map__21180__$1 = ((((!((map__21180 == null)))?((((map__21180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21180):map__21180);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__21176,G__21164,G__21165,G__21166,G__21167,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1))
}));
});})(G__21176,G__21164,G__21165,G__21166,G__21167,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21178 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__21176,G__21177,G__21178);
})()));
var G__21169 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__21182 = "button";
var G__21183 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__21182,G__21164,G__21165,G__21166,G__21167,G__21168,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__21182,G__21164,G__21165,G__21166,G__21167,G__21168,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1){
return (function (p__21185){
var map__21186 = p__21185;
var map__21186__$1 = ((((!((map__21186 == null)))?((((map__21186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21186):map__21186);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__21182,G__21164,G__21165,G__21166,G__21167,G__21168,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1))
}));
});})(G__21182,G__21164,G__21165,G__21166,G__21167,G__21168,G__21160,G__21161,error_QMARK_,tests,some_tests,total_tests,map__21155,map__21155__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__21184 = sablono.interpreter.interpret(pass);
return React.createElement(G__21182,G__21183,G__21184);
})()));
return React.createElement(G__21164,G__21165,G__21166,G__21167,G__21168,G__21169);
})();
var G__21163 = (function (){var G__21188 = "div";
var G__21189 = ({"className": devcards.system.devcards_rendered_card_class});
var G__21190 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__6409__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__21188,G__21189,G__21190);
})();
return React.createElement(G__21160,G__21161,G__21162,G__21163);
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
devcards.core.test_loop = (function (){var c__15685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto__){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto__){
return (function (state_21279){
var state_val_21280 = (state_21279[(1)]);
if((state_val_21280 === (7))){
var state_21279__$1 = state_21279;
var statearr_21281_21330 = state_21279__$1;
(statearr_21281_21330[(2)] = false);

(statearr_21281_21330[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (20))){
var inst_21218 = (state_21279[(7)]);
var inst_21237 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21218);
var state_21279__$1 = state_21279;
var statearr_21282_21331 = state_21279__$1;
(statearr_21282_21331[(2)] = inst_21237);

(statearr_21282_21331[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (27))){
var inst_21254 = (state_21279[(8)]);
var inst_21242 = (state_21279[(9)]);
var inst_21258 = (inst_21242.cljs$core$IFn$_invoke$arity$1 ? inst_21242.cljs$core$IFn$_invoke$arity$1(inst_21254) : inst_21242.call(null,inst_21254));
var state_21279__$1 = state_21279;
var statearr_21283_21332 = state_21279__$1;
(statearr_21283_21332[(2)] = inst_21258);

(statearr_21283_21332[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (1))){
var state_21279__$1 = state_21279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21279__$1,(2),devcards.core.test_channel);
} else {
if((state_val_21280 === (24))){
var state_21279__$1 = state_21279;
var statearr_21284_21333 = state_21279__$1;
(statearr_21284_21333[(2)] = null);

(statearr_21284_21333[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (4))){
var state_21279__$1 = state_21279;
var statearr_21285_21334 = state_21279__$1;
(statearr_21285_21334[(2)] = false);

(statearr_21285_21334[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (15))){
var state_21279__$1 = state_21279;
var statearr_21286_21335 = state_21279__$1;
(statearr_21286_21335[(2)] = false);

(statearr_21286_21335[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (21))){
var inst_21218 = (state_21279[(7)]);
var state_21279__$1 = state_21279;
var statearr_21287_21336 = state_21279__$1;
(statearr_21287_21336[(2)] = inst_21218);

(statearr_21287_21336[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (13))){
var inst_21277 = (state_21279[(2)]);
var state_21279__$1 = state_21279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21279__$1,inst_21277);
} else {
if((state_val_21280 === (22))){
var inst_21241 = (state_21279[(10)]);
var inst_21240 = (state_21279[(2)]);
var inst_21241__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21240,cljs.core.cst$kw$tests);
var inst_21242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21240,cljs.core.cst$kw$callback);
var state_21279__$1 = (function (){var statearr_21288 = state_21279;
(statearr_21288[(10)] = inst_21241__$1);

(statearr_21288[(9)] = inst_21242);

return statearr_21288;
})();
if(cljs.core.truth_(inst_21241__$1)){
var statearr_21289_21337 = state_21279__$1;
(statearr_21289_21337[(1)] = (23));

} else {
var statearr_21290_21338 = state_21279__$1;
(statearr_21290_21338[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (29))){
var inst_21268 = (state_21279[(2)]);
var inst_21269 = cljs.test.clear_env_BANG_();
var state_21279__$1 = (function (){var statearr_21291 = state_21279;
(statearr_21291[(11)] = inst_21268);

(statearr_21291[(12)] = inst_21269);

return statearr_21291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21279__$1,(30),devcards.core.test_channel);
} else {
if((state_val_21280 === (6))){
var state_21279__$1 = state_21279;
var statearr_21292_21339 = state_21279__$1;
(statearr_21292_21339[(2)] = true);

(statearr_21292_21339[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (28))){
var inst_21242 = (state_21279[(9)]);
var inst_21260 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_21261 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_21262 = cljs.core.PersistentHashMap.fromArrays(inst_21260,inst_21261);
var inst_21263 = devcards.core.collect_test(inst_21262);
var inst_21264 = cljs.test.get_current_env();
var inst_21265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_21264,cljs.core.cst$kw$error,"Execution timed out!");
var inst_21266 = (inst_21242.cljs$core$IFn$_invoke$arity$1 ? inst_21242.cljs$core$IFn$_invoke$arity$1(inst_21265) : inst_21242.call(null,inst_21265));
var state_21279__$1 = (function (){var statearr_21293 = state_21279;
(statearr_21293[(13)] = inst_21263);

return statearr_21293;
})();
var statearr_21294_21340 = state_21279__$1;
(statearr_21294_21340[(2)] = inst_21266);

(statearr_21294_21340[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (25))){
var inst_21275 = (state_21279[(2)]);
var state_21279__$1 = state_21279;
var statearr_21295_21341 = state_21279__$1;
(statearr_21295_21341[(2)] = inst_21275);

(statearr_21295_21341[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (17))){
var state_21279__$1 = state_21279;
var statearr_21296_21342 = state_21279__$1;
(statearr_21296_21342[(2)] = true);

(statearr_21296_21342[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (3))){
var inst_21195 = (state_21279[(14)]);
var inst_21200 = inst_21195.cljs$lang$protocol_mask$partition0$;
var inst_21201 = (inst_21200 & (64));
var inst_21202 = inst_21195.cljs$core$ISeq$;
var inst_21203 = (inst_21201) || (inst_21202);
var state_21279__$1 = state_21279;
if(cljs.core.truth_(inst_21203)){
var statearr_21297_21343 = state_21279__$1;
(statearr_21297_21343[(1)] = (6));

} else {
var statearr_21298_21344 = state_21279__$1;
(statearr_21298_21344[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (12))){
var inst_21218 = (state_21279[(7)]);
var inst_21222 = (inst_21218 == null);
var inst_21223 = cljs.core.not(inst_21222);
var state_21279__$1 = state_21279;
if(inst_21223){
var statearr_21299_21345 = state_21279__$1;
(statearr_21299_21345[(1)] = (14));

} else {
var statearr_21300_21346 = state_21279__$1;
(statearr_21300_21346[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (2))){
var inst_21195 = (state_21279[(14)]);
var inst_21195__$1 = (state_21279[(2)]);
var inst_21197 = (inst_21195__$1 == null);
var inst_21198 = cljs.core.not(inst_21197);
var state_21279__$1 = (function (){var statearr_21301 = state_21279;
(statearr_21301[(14)] = inst_21195__$1);

return statearr_21301;
})();
if(inst_21198){
var statearr_21302_21347 = state_21279__$1;
(statearr_21302_21347[(1)] = (3));

} else {
var statearr_21303_21348 = state_21279__$1;
(statearr_21303_21348[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (23))){
var inst_21241 = (state_21279[(10)]);
var inst_21247 = (state_21279[(15)]);
var inst_21247__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_21248 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21249 = devcards.core.run_card_tests(inst_21241);
var inst_21250 = [inst_21249,inst_21247__$1];
var inst_21251 = (new cljs.core.PersistentVector(null,2,(5),inst_21248,inst_21250,null));
var state_21279__$1 = (function (){var statearr_21304 = state_21279;
(statearr_21304[(15)] = inst_21247__$1);

return statearr_21304;
})();
return cljs.core.async.ioc_alts_BANG_(state_21279__$1,(26),inst_21251);
} else {
if((state_val_21280 === (19))){
var inst_21232 = (state_21279[(2)]);
var state_21279__$1 = state_21279;
var statearr_21305_21349 = state_21279__$1;
(statearr_21305_21349[(2)] = inst_21232);

(statearr_21305_21349[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (11))){
var inst_21195 = (state_21279[(14)]);
var inst_21215 = (state_21279[(2)]);
var inst_21216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21215,cljs.core.cst$kw$tests);
var inst_21217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21215,cljs.core.cst$kw$callback);
var inst_21218 = inst_21195;
var state_21279__$1 = (function (){var statearr_21306 = state_21279;
(statearr_21306[(7)] = inst_21218);

(statearr_21306[(16)] = inst_21216);

(statearr_21306[(17)] = inst_21217);

return statearr_21306;
})();
var statearr_21307_21350 = state_21279__$1;
(statearr_21307_21350[(2)] = null);

(statearr_21307_21350[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (9))){
var inst_21195 = (state_21279[(14)]);
var inst_21212 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21195);
var state_21279__$1 = state_21279;
var statearr_21308_21351 = state_21279__$1;
(statearr_21308_21351[(2)] = inst_21212);

(statearr_21308_21351[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (5))){
var inst_21210 = (state_21279[(2)]);
var state_21279__$1 = state_21279;
if(cljs.core.truth_(inst_21210)){
var statearr_21309_21352 = state_21279__$1;
(statearr_21309_21352[(1)] = (9));

} else {
var statearr_21310_21353 = state_21279__$1;
(statearr_21310_21353[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (14))){
var inst_21218 = (state_21279[(7)]);
var inst_21225 = inst_21218.cljs$lang$protocol_mask$partition0$;
var inst_21226 = (inst_21225 & (64));
var inst_21227 = inst_21218.cljs$core$ISeq$;
var inst_21228 = (inst_21226) || (inst_21227);
var state_21279__$1 = state_21279;
if(cljs.core.truth_(inst_21228)){
var statearr_21311_21354 = state_21279__$1;
(statearr_21311_21354[(1)] = (17));

} else {
var statearr_21312_21355 = state_21279__$1;
(statearr_21312_21355[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (26))){
var inst_21247 = (state_21279[(15)]);
var inst_21253 = (state_21279[(2)]);
var inst_21254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21253,(0),null);
var inst_21255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21253,(1),null);
var inst_21256 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_21255,inst_21247);
var state_21279__$1 = (function (){var statearr_21313 = state_21279;
(statearr_21313[(8)] = inst_21254);

return statearr_21313;
})();
if(inst_21256){
var statearr_21314_21356 = state_21279__$1;
(statearr_21314_21356[(1)] = (27));

} else {
var statearr_21315_21357 = state_21279__$1;
(statearr_21315_21357[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (16))){
var inst_21235 = (state_21279[(2)]);
var state_21279__$1 = state_21279;
if(cljs.core.truth_(inst_21235)){
var statearr_21316_21358 = state_21279__$1;
(statearr_21316_21358[(1)] = (20));

} else {
var statearr_21317_21359 = state_21279__$1;
(statearr_21317_21359[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (30))){
var inst_21271 = (state_21279[(2)]);
var inst_21218 = inst_21271;
var state_21279__$1 = (function (){var statearr_21318 = state_21279;
(statearr_21318[(7)] = inst_21218);

return statearr_21318;
})();
var statearr_21319_21360 = state_21279__$1;
(statearr_21319_21360[(2)] = null);

(statearr_21319_21360[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (10))){
var inst_21195 = (state_21279[(14)]);
var state_21279__$1 = state_21279;
var statearr_21320_21361 = state_21279__$1;
(statearr_21320_21361[(2)] = inst_21195);

(statearr_21320_21361[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (18))){
var state_21279__$1 = state_21279;
var statearr_21321_21362 = state_21279__$1;
(statearr_21321_21362[(2)] = false);

(statearr_21321_21362[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21280 === (8))){
var inst_21207 = (state_21279[(2)]);
var state_21279__$1 = state_21279;
var statearr_21322_21363 = state_21279__$1;
(statearr_21322_21363[(2)] = inst_21207);

(statearr_21322_21363[(1)] = (5));


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
});})(c__15685__auto__))
;
return ((function (switch__15561__auto__,c__15685__auto__){
return (function() {
var devcards$core$state_machine__15562__auto__ = null;
var devcards$core$state_machine__15562__auto____0 = (function (){
var statearr_21326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21326[(0)] = devcards$core$state_machine__15562__auto__);

(statearr_21326[(1)] = (1));

return statearr_21326;
});
var devcards$core$state_machine__15562__auto____1 = (function (state_21279){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_21279);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e21327){if((e21327 instanceof Object)){
var ex__15565__auto__ = e21327;
var statearr_21328_21364 = state_21279;
(statearr_21328_21364[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21279);

return cljs.core.cst$kw$recur;
} else {
throw e21327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__21365 = state_21279;
state_21279 = G__21365;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
devcards$core$state_machine__15562__auto__ = function(state_21279){
switch(arguments.length){
case 0:
return devcards$core$state_machine__15562__auto____0.call(this);
case 1:
return devcards$core$state_machine__15562__auto____1.call(this,state_21279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__15562__auto____0;
devcards$core$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__15562__auto____1;
return devcards$core$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto__))
})();
var state__15687__auto__ = (function (){var statearr_21329 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_21329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto__);

return statearr_21329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto__))
);

return c__15685__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__19573__auto___21370 = ({"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__19573__auto___21370);
}

var seq__21366_21371 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21367_21372 = null;
var count__21368_21373 = (0);
var i__21369_21374 = (0);
while(true){
if((i__21369_21374 < count__21368_21373)){
var property__19574__auto___21375 = chunk__21367_21372.cljs$core$IIndexed$_nth$arity$2(null,i__21369_21374);
if(cljs.core.truth_((base__19573__auto___21370[property__19574__auto___21375]))){
(devcards.core.TestDevcard.prototype[property__19574__auto___21375] = (base__19573__auto___21370[property__19574__auto___21375]));
} else {
}

var G__21376 = seq__21366_21371;
var G__21377 = chunk__21367_21372;
var G__21378 = count__21368_21373;
var G__21379 = (i__21369_21374 + (1));
seq__21366_21371 = G__21376;
chunk__21367_21372 = G__21377;
count__21368_21373 = G__21378;
i__21369_21374 = G__21379;
continue;
} else {
var temp__4657__auto___21380 = cljs.core.seq(seq__21366_21371);
if(temp__4657__auto___21380){
var seq__21366_21381__$1 = temp__4657__auto___21380;
if(cljs.core.chunked_seq_QMARK_(seq__21366_21381__$1)){
var c__7220__auto___21382 = cljs.core.chunk_first(seq__21366_21381__$1);
var G__21383 = cljs.core.chunk_rest(seq__21366_21381__$1);
var G__21384 = c__7220__auto___21382;
var G__21385 = cljs.core.count(c__7220__auto___21382);
var G__21386 = (0);
seq__21366_21371 = G__21383;
chunk__21367_21372 = G__21384;
count__21368_21373 = G__21385;
i__21369_21374 = G__21386;
continue;
} else {
var property__19574__auto___21387 = cljs.core.first(seq__21366_21381__$1);
if(cljs.core.truth_((base__19573__auto___21370[property__19574__auto___21387]))){
(devcards.core.TestDevcard.prototype[property__19574__auto___21387] = (base__19573__auto___21370[property__19574__auto___21387]));
} else {
}

var G__21388 = cljs.core.next(seq__21366_21381__$1);
var G__21389 = null;
var G__21390 = (0);
var G__21391 = (0);
seq__21366_21371 = G__21388;
chunk__21367_21372 = G__21389;
count__21368_21373 = G__21390;
i__21369_21374 = G__21391;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__7491__auto__ = [];
var len__7484__auto___21398 = arguments.length;
var i__7485__auto___21399 = (0);
while(true){
if((i__7485__auto___21399 < len__7484__auto___21398)){
args__7491__auto__.push((arguments[i__7485__auto___21399]));

var G__21400 = (i__7485__auto___21399 + (1));
i__7485__auto___21399 = G__21400;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core21393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core21393 = (function (test_thunks,meta21394){
this.test_thunks = test_thunks;
this.meta21394 = meta21394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core21393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21395,meta21394__$1){
var self__ = this;
var _21395__$1 = this;
return (new devcards.core.t_devcards$core21393(self__.test_thunks,meta21394__$1));
});

devcards.core.t_devcards$core21393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21395){
var self__ = this;
var _21395__$1 = this;
return self__.meta21394;
});

devcards.core.t_devcards$core21393.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core21393.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__21396 = devcards.core.TestDevcard;
var G__21397 = ({"test_thunks": self__.test_thunks, "path": path});
return React.createElement(G__21396,G__21397);
});

devcards.core.t_devcards$core21393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta21394], null);
});

devcards.core.t_devcards$core21393.cljs$lang$type = true;

devcards.core.t_devcards$core21393.cljs$lang$ctorStr = "devcards.core/t_devcards$core21393";

devcards.core.t_devcards$core21393.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"devcards.core/t_devcards$core21393");
});

devcards.core.__GT_t_devcards$core21393 = (function devcards$core$__GT_t_devcards$core21393(test_thunks__$1,meta21394){
return (new devcards.core.t_devcards$core21393(test_thunks__$1,meta21394));
});

}

return (new devcards.core.t_devcards$core21393(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq21392){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21392));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__21403 = (function (){var attrs21404 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21404))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21404], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs21404))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21404)], null)));
})();
return React.renderToString(G__21403);
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
var G__21408 = (function (){var attrs21410 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21410))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21410], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs21410))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21410)], null)));
})();
var G__21409 = devcards.system.devcards_app_node();
return React.render(G__21408,G__21409);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__15685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto__){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto__){
return (function (state_21440){
var state_val_21441 = (state_21440[(1)]);
if((state_val_21441 === (1))){
var inst_21431 = devcards.core.load_data_from_channel_BANG_();
var state_21440__$1 = state_21440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21440__$1,(2),inst_21431);
} else {
if((state_val_21441 === (2))){
var inst_21433 = (state_21440[(2)]);
var inst_21434 = cljs.core.async.timeout((100));
var state_21440__$1 = (function (){var statearr_21442 = state_21440;
(statearr_21442[(7)] = inst_21433);

return statearr_21442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21440__$1,(3),inst_21434);
} else {
if((state_val_21441 === (3))){
var inst_21436 = (state_21440[(2)]);
var inst_21437 = (function (){return ((function (inst_21436,state_val_21441,c__15685__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_21436,state_val_21441,c__15685__auto__))
})();
var inst_21438 = setTimeout(inst_21437,(0));
var state_21440__$1 = (function (){var statearr_21443 = state_21440;
(statearr_21443[(8)] = inst_21436);

return statearr_21443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21440__$1,inst_21438);
} else {
return null;
}
}
}
});})(c__15685__auto__))
;
return ((function (switch__15561__auto__,c__15685__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__15562__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__15562__auto____0 = (function (){
var statearr_21447 = [null,null,null,null,null,null,null,null,null];
(statearr_21447[(0)] = devcards$core$mount_namespace_$_state_machine__15562__auto__);

(statearr_21447[(1)] = (1));

return statearr_21447;
});
var devcards$core$mount_namespace_$_state_machine__15562__auto____1 = (function (state_21440){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_21440);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e21448){if((e21448 instanceof Object)){
var ex__15565__auto__ = e21448;
var statearr_21449_21451 = state_21440;
(statearr_21449_21451[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21440);

return cljs.core.cst$kw$recur;
} else {
throw e21448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__21452 = state_21440;
state_21440 = G__21452;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__15562__auto__ = function(state_21440){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__15562__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__15562__auto____1.call(this,state_21440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__15562__auto____0;
devcards$core$mount_namespace_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__15562__auto____1;
return devcards$core$mount_namespace_$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto__))
})();
var state__15687__auto__ = (function (){var statearr_21450 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_21450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto__);

return statearr_21450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto__))
);

return c__15685__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
